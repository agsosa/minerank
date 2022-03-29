import { Injectable, Logger } from '@nestjs/common';
import { validate } from 'class-validator';
import { Cron, CronExpression, Timeout } from '@nestjs/schedule';

import { EditionEnum, ServerStatusEnum } from 'src/@shared/types/enum/community.enum';

import { CommunityService } from 'src/community/community.service';
import { CreateCommunityDto } from 'src/community/dto/create-community.dto';

import { CreateGamemodeDto } from 'src/gamemode/dto/create-gamemode.dto';
import { GamemodeService } from 'src/gamemode/gamemode.service';

import { CreateVersionDto } from 'src/version/dto/create-version.dto';
import { VersionService } from 'src/version/version.service';

import { scrapeGameModes } from './task/scrape-gamemodes.task';
import { scrapeServers } from './task/scrape-servers.task';
import { scrapeVersions } from './task/scrape-versions.task';
import { pingServer } from './task/ping-server.task';
import { ICommunity } from 'src/@shared/types/entities/ICommunity';

@Injectable()
export class TaskService {
  private readonly logger = new Logger(TaskService.name);

  constructor(
    private readonly versionService: VersionService,
    private readonly gamemodeService: GamemodeService,
    private readonly communityService: CommunityService,
  ) {}

  @Timeout(500)
  async initializeTasks() {
    await Promise.all([this.scrapeGameModesTask(), this.scrapeVersionsTask()]);
    this.scrapeServersTask();
  }

  @Cron(CronExpression.EVERY_8_HOURS)
  async scrapeVersionsTask() {
    this.logger.debug('Executing scrapeVersionsTask()');

    const versions = await scrapeVersions();

    this.logger.debug('Versions scraped:', versions);

    const dto: CreateVersionDto[] = versions.map((version) => ({
      label: version,
    }));

    await this.versionService.createIgnoreDuplicates(dto);
  }

  @Cron(CronExpression.EVERY_8_HOURS)
  async scrapeGameModesTask() {
    this.logger.debug('Executing scrapeGameModesTask()');

    const gamemodes = await scrapeGameModes();

    this.logger.debug('GameModes scraped:', gamemodes);

    const dto: CreateGamemodeDto[] = gamemodes.map((gm) => ({
      label: gm,
      shortName: gm.toLowerCase().replaceAll(' ', '-'),
    }));

    await this.gamemodeService.createIgnoreDuplicates(dto);
  }

  async scrapeServersTask() {
    this.logger.debug('Executing scrapeServersTask()');

    const servers = await scrapeServers();

    this.logger.debug(`Total servers scraped: ${servers.length}`);

    // We use this array to batch insert the servers
    const promises: Promise<any>[] = [];

    // Get all gamemodes & versions
    const gamemodeEntities = await this.gamemodeService.findAll();
    const versionEntities = await this.versionService.findAll();

    for (const server of servers) {
      const versions = versionEntities.filter((v) => server.versions.includes(v.label));
      const gamemodes = gamemodeEntities.filter((g) => server.gamemodes.includes(g.shortName));

      // Optimize social links lookup
      const socialMap = new Map();
      server.socialLinks.forEach((link) => {
        socialMap.set(link.type, link.url);
      });

      // Create input dto
      const dto: Partial<ICommunity> = {
        versions,
        gamemodes,
        isApproved: true,
        shortName: server.shortName,
        name: server.name,
        upvotes: server.upvotes,
        website: socialMap.get('website'),
        discord: socialMap.get('discord'),
        twitter: socialMap.get('twitter'),
        facebook: socialMap.get('facebook'),
        youtube: socialMap.get('youtube'),
        telegram: socialMap.get('telegram'),
        instagram: socialMap.get('instagram'),
        teamspeak: socialMap.get('teamspeak'),
        description: server.description,
        ip: server.ip,
        port: server.port,
        premiumType: server.premiumType,
        countryCode: server.countryCode,
        user: '',
        youtubeTrailer: '',
        edition:
          server.port === 19132 ||
          server.port === 19133 ||
          server.name.toLowerCase().includes('bedrock')
            ? EditionEnum.BEDROCK
            : EditionEnum.JAVA,
      };

      // Async validate dto & create the community
      promises.push(
        new Promise(async (resolve) => {
          const errors = await validate(dto);

          if (errors.length > 0) {
            this.logger.error('DTO Validation failed. errors: ', errors);
            throw new Error('DTO Validation Error');
          }

          await this.communityService.createIgnoreDuplicate(dto, true);

          resolve(null);
        }),
      );
    }

    this.logger.debug('Waiting for ScrapeServersTask() to finish...');

    await Promise.all(promises);

    this.logger.debug('ScrapeServersTask() finished');
  }

  @Timeout(500)
  @Cron(CronExpression.EVERY_10_MINUTES)
  async pingServers() {
    const allCommunities = await this.communityService.findAll();
    const communities = allCommunities.items.filter((c) => c.isApproved && !c.isDeleted && c.ip);

    this.logger.debug(`Ping ${communities.length} servers...`);

    let count = 0; // throttle
    let failed = 0;
    const promises: Promise<any>[] = [];

    for (const server of communities) {
      if (count >= 50) await Promise.all(promises);
      count++;

      promises.push(
        pingServer(server.ip, server.port).then((result) => {
          count--;

          if (!result) {
            console.log('Failed to ping server ' + server.ip + ':' + server.port);
            this.communityService.update(server.id, { serverStatus: ServerStatusEnum.OFFLINE });
            failed++;
          } else
            this.communityService.update(server.id, {
              players: result.players,
              maxPlayers: result.maxPlayers,
              serverStatus: ServerStatusEnum.ONLINE,
            });
        }),
      );
    }

    await Promise.all(promises);

    this.logger.debug(
      'Failed to ping ' + failed + ' servers (of total ' + communities.length + ')',
    );

    this.logger.debug('PingServersTask() finished');
  }
}
