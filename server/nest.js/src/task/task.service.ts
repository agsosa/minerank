import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression, Timeout } from '@nestjs/schedule';
import { EditionEnum, PremiumTypeEnum } from 'src/@shared/types/enum/community.enum';
import { CommunityService } from 'src/community/community.service';
import { CreateCommunityDto } from 'src/community/dto/create-community.dto';
import { CreateGamemodeDto } from 'src/gamemode/dto/create-gamemode.dto';
import { GamemodeService } from 'src/gamemode/gamemode.service';
import { CreateVersionDto } from 'src/version/dto/create-version.dto';
import { VersionService } from 'src/version/version.service';
import { scrapeGameModes } from './task/scrape-gamemodes.task';
import { scrapeServers } from './task/scrape-servers.task';
import { scrapeVersions } from './task/scrape-versions.task';
import countryLookup from 'country-code-lookup';
import { ICreateCommunityDto } from 'src/@shared/types/dtos/community.dto';
import { validate } from 'class-validator';

@Injectable()
export class TaskService {
  private readonly logger = new Logger(TaskService.name);

  constructor(
    private readonly versionService: VersionService,
    private readonly gamemodeService: GamemodeService,
    private readonly communityService: CommunityService,
  ) {}

  @Timeout(500)
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

  @Timeout(500)
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

  @Timeout(500)
  async scrapeServersTask() {
    this.logger.debug('Executing scrapeServersTask()');

    const servers = await scrapeServers();

    this.logger.debug(`Total servers scraped: ${servers.length}`);

    const gamemodeEntities = await this.gamemodeService.findAll();
    const versionEntities = await this.versionService.findAll();

    for (const server of servers) {
      const splits = {
        versions: server.version.split('-'),
        gamemodes: server.gamemodes.split(', '),
        ip: server.ip.split(':'),
      };

      const relations = {
        versions: versionEntities.filter((v) => splits.versions.includes(v.label)).map((v) => v.id),
        gamemodes: gamemodeEntities
          .filter((g) => splits.gamemodes.includes(g.shortName))
          .map((g) => g.id),
      };

      let website = '',
        discord = '',
        twitter = '',
        facebook = '',
        youtube = '',
        instagram = '',
        teamspeak = '',
        telegram = '';

      for (const link of server.socialLinks) {
        if (link.type === 'website') website = link.url;
        if (link.type === 'discord') discord = link.url;
        if (link.type === 'facebook') facebook = link.url;
        if (link.type === 'twitter') twitter = link.url;
        if (link.type === 'youtube') youtube = link.url;
        if (link.type === 'instagram') instagram = link.url;
        if (link.type === 'teamspeak') teamspeak = link.url;
        if (link.type === 'telegram') telegram = link.url;
      }

      const name = server.name;
      const shortName = server.shortName;
      const versions = relations.versions;
      const gamemodes = relations.gamemodes;
      const description = server.description;
      const ip = splits.ip[0];
      const port = parseInt(splits.ip[1]) || 25565;
      const premiumType = server.premiumType as PremiumTypeEnum;
      const countryCode = countryLookup.byCountry(server.country)?.iso2 || 'ES';

      const dto: CreateCommunityDto = {
        versions,
        gamemodes,
        shortName,
        name,
        website,
        discord,
        twitter,
        facebook,
        youtube,
        telegram,
        instagram,
        teamspeak,
        description,
        ip,
        port,
        premiumType,
        countryCode,
        user: '',
        youtubeTrailer: '',
        edition: EditionEnum.JAVA,
      };

      const errors = await validate(dto);

      if (errors.length > 0) {
        this.logger.error('DTO Validation failed. errors: ', errors);
        throw new Error('DTO Validation Error');
      }

      console.log('Server:', server, 'DTO:', dto);

      //  await this.communityService.create(dto);
    }
  }
}
