import { Module } from '@nestjs/common';
import { CommunityModule } from 'src/community/community.module';
import { GamemodeModule } from 'src/gamemode/gamemode.module';
import { VersionModule } from 'src/version/version.module';
import { TaskService } from './task.service';

@Module({
  imports: [VersionModule, GamemodeModule, CommunityModule],
  providers: [TaskService],
})
export class TaskModule {}
