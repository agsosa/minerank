import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCommunityDto } from './dto/create-community.dto';
import { UpdateCommunityDto } from './dto/update-community.dto';
import { Community } from './community.entity';
import { SearchCommunityDto } from './dto/search-community.dto';

@Injectable()
export class CommunityService {
  constructor(
    @InjectRepository(Community)
    private communityRepository: Repository<Community>,
  ) {}

  create(createCommunityDto: CreateCommunityDto) {
    return this.communityRepository.insert(createCommunityDto);
  }

  findAll(page = 1, limit = 10) {
    return this.communityRepository.find({
      skip: limit * (page - 1),
      take: limit,
    });
  }

  search(searchCommunityDto: SearchCommunityDto) {
    // TODO: Add pagination, LIKE parameters, etc.
    return this.communityRepository.find({
      where: searchCommunityDto,
    });
  }

  findOne(id: number) {
    return this.communityRepository.findOne(id);
  }

  update(id: number, updateCommunityDto: UpdateCommunityDto) {
    return `This action updates a #${id} server`;
  }

  remove(id: number) {
    return this.communityRepository.delete(id);
  }
}
