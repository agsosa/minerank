import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Version } from './version.entity';
import { VersionService } from './version.service';
import { VersionController } from './version.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Version])],
  controllers: [VersionController],
  providers: [VersionService],
  exports: [VersionService],
})
export class VersionModule {}
