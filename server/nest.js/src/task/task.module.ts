import { Module } from '@nestjs/common';
import { GamemodeModule } from 'src/gamemode/gamemode.module';
import { VersionModule } from 'src/version/version.module';
import { TaskService } from './task.service';

@Module({
  imports: [VersionModule, GamemodeModule],
  providers: [TaskService],
})
export class TaskModule {}
