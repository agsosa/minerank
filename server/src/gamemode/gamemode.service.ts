import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  ICreateGameModeResponseDto,
  IFindGameModeResponseDto,
  IFindGameModesResponseDto,
  IRemoveGameModeResponseDto,
  IUpdateGameModeResponseDto,
} from 'src/@shared/types/dtos/gamemode.dto';
import { Repository } from 'typeorm';
import { CreateGamemodeDto } from './dto/create-gamemode.dto';
import { UpdateGamemodeDto } from './dto/update-gamemode.dto';
import { GameMode } from './gamemode.entity';

@Injectable()
export class GamemodeService {
  constructor(
    @InjectRepository(GameMode)
    private gamemodeRepository: Repository<GameMode>,
  ) {}

  create(
    createGamemodeDto: CreateGamemodeDto | CreateGamemodeDto[],
  ): Promise<ICreateGameModeResponseDto> {
    return this.gamemodeRepository.insert(createGamemodeDto);
  }

  createIgnoreDuplicates(
    createGamemodeDto: CreateGamemodeDto | CreateGamemodeDto[],
  ): Promise<ICreateGameModeResponseDto> {
    const input = Array.isArray(createGamemodeDto) ? createGamemodeDto : [createGamemodeDto];

    return this.gamemodeRepository
      .createQueryBuilder()
      .insert()
      .into(GameMode)
      .values(input)
      .orIgnore()
      .execute();
  }

  async findAll(): Promise<IFindGameModesResponseDto> {
    return this.gamemodeRepository
      .createQueryBuilder('gamemode')
      .loadRelationCountAndMap('gamemode.communityCount', 'gamemode.communities')
      .where('gamemode.isDeleted = :isDeleted', { isDeleted: false })
      .getMany();
  }

  findOne(shortName: string): Promise<IFindGameModeResponseDto> {
    return this.gamemodeRepository.findOne({ shortName, isDeleted: false });
  }

  update(id: number, updateGamemodeDto: UpdateGamemodeDto): Promise<IUpdateGameModeResponseDto> {
    return this.gamemodeRepository.update(id, updateGamemodeDto);
  }

  remove(id: number): Promise<IRemoveGameModeResponseDto> {
    return this.gamemodeRepository.update(id, { isDeleted: true });
  }
}
