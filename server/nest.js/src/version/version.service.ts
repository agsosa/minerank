import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  ICreateVersionResponseDto,
  IFindVersionResponseDto,
  IFindVersionsResponseDto,
  IRemoveVersionResponseDto,
  IUpdateVersionResponseDto,
} from 'src/@shared/types/dtos/version.dto';
import { Repository } from 'typeorm';
import { CreateVersionDto } from './dto/create-version.dto';
import { UpdateVersionDto } from './dto/update-version.dto';
import { Version } from './version.entity';

@Injectable()
export class VersionService {
  constructor(
    @InjectRepository(Version)
    private versionRepository: Repository<Version>,
  ) {}

  create(createGamemodeDto: CreateVersionDto): Promise<ICreateVersionResponseDto> {
    return this.versionRepository.insert(createGamemodeDto);
  }

  async findAll(): Promise<IFindVersionsResponseDto> {
    /*return this.versionRepository
      .createQueryBuilder('gamemode')
      .loadRelationCountAndMap('gamemode.communityCount', 'gamemode.communities')
      .where('gamemode.isDeleted = :isDeleted', { isDeleted: false })
      .getMany();*/
    return [];
  }

  findOne(label: string): Promise<IFindVersionResponseDto> {
    return this.versionRepository.findOne({ label, isDeleted: false });
  }

  update(id: number, updateGamemodeDto: UpdateVersionDto): Promise<IUpdateVersionResponseDto> {
    return this.versionRepository.update(id, updateGamemodeDto);
  }

  remove(id: number): Promise<IRemoveVersionResponseDto> {
    return this.versionRepository.update(id, { isDeleted: true });
  }
}