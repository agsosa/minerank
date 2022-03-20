import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression, Timeout } from '@nestjs/schedule';
import { CreateVersionDto } from 'src/version/dto/create-version.dto';
import { VersionService } from 'src/version/version.service';
import { scrapeVersions } from './task/scrape-versions.task';

@Injectable()
export class TaskService {
  private readonly logger = new Logger(TaskService.name);

  constructor(private readonly versionService: VersionService) {}

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
  async scrapeVersionsTaskOnInit() {
    this.logger.debug('Executing scrapeVersionsTask() on init');
    this.scrapeVersionsTask();
  }
}
