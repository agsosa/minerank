import { Module } from '@nestjs/common';
import { VersionModule } from 'src/version/version.module';
import { TaskService } from './task.service';

@Module({
  imports: [VersionModule],
  providers: [TaskService],
})
export class TaskModule {}
