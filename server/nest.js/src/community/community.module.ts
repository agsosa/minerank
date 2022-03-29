import { Module } from '@nestjs/common';
import { CommunityService } from './community.service';
import { CommunityController } from './community.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Community } from './community.entity';
import { GameMode } from 'src/gamemode/gamemode.entity';
import { Version } from 'src/version/version.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Community, GameMode, Version])],
  controllers: [CommunityController],
  providers: [CommunityService],
  exports: [CommunityService],
})
export class CommunityModule {}
