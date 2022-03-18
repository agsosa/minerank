import { Module } from '@nestjs/common';
import { CommunityService } from './community.service';
import { CommunityController } from './community.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Community } from './community.entity';
import { GameMode } from 'src/gamemode/gamemode.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Community, GameMode])],
  controllers: [CommunityController],
  providers: [CommunityService],
})
export class CommunityModule {}
