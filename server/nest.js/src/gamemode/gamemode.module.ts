import { Module } from '@nestjs/common';
import { GamemodeService } from './gamemode.service';
import { GamemodeController } from './gamemode.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GameMode } from './gamemode.entity';

@Module({
  imports: [TypeOrmModule.forFeature([GameMode])],
  controllers: [GamemodeController],
  providers: [GamemodeService],
})
export class GamemodeModule {}
