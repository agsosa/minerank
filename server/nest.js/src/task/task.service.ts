import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression, Timeout } from '@nestjs/schedule';
import { CreateGamemodeDto } from 'src/gamemode/dto/create-gamemode.dto';
import { GamemodeService } from 'src/gamemode/gamemode.service';
import { CreateVersionDto } from 'src/version/dto/create-version.dto';
import { VersionService } from 'src/version/version.service';
import { scrapeGameModes } from './task/scrape-gamemodes.task';
import { scrapeServers } from './task/scrape-servers.task';
import { scrapeVersions } from './task/scrape-versions.task';

@Injectable()
export class TaskService {
  private readonly logger = new Logger(TaskService.name);

  constructor(
    private readonly versionService: VersionService,
    private readonly gamemodeService: GamemodeService,
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

    /*const dto: CreateGamemodeDto[] = gamemodes.map((gm) => ({
      label: gm,
      shortName: gm.toLowerCase().replaceAll(' ', '-'),
    }));

    await this.gamemodeService.createIgnoreDuplicates(dto);*/
  }
}
