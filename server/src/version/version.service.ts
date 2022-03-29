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

  create(
    createVersionDto: CreateVersionDto | CreateVersionDto[],
  ): Promise<ICreateVersionResponseDto> {
    return this.versionRepository.insert(createVersionDto);
  }

  createIgnoreDuplicates(
    createVersionDto: CreateVersionDto | CreateVersionDto[],
  ): Promise<ICreateVersionResponseDto> {
    const input = Array.isArray(createVersionDto) ? createVersionDto : [createVersionDto];

    return this.versionRepository
      .createQueryBuilder()
      .insert()
      .into(Version)
      .values(input)
      .orIgnore()
      .execute();
  }

  async findAll(): Promise<IFindVersionsResponseDto> {
    return this.versionRepository
      .createQueryBuilder('version')
      .loadRelationCountAndMap('version.communityCount', 'version.communities')
      .where('version.isDeleted = :isDeleted', { isDeleted: false })
      .getMany();
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
