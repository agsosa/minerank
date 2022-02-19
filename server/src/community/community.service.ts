import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCommunityDto } from './dto/create-community.dto';
import { UpdateServerDto } from './dto/update-server.dto';
import { Community } from './community.entity';

@Injectable()
export class CommunityService {
  constructor(
    @InjectRepository(Community)
    private communityRepository: Repository<Community>,
  ) {}

  create(createCommunityDto: CreateCommunityDto) {
    return this.communityRepository.insert(createCommunityDto);
  }

  findAll() {
    return this.communityRepository.find();
  }

  findOne(id: number) {
    return this.communityRepository.findOne(id);
  }

  update(id: number, updateCommunityDto: UpdateServerDto) {
    return `This action updates a #${id} server`;
  }

  remove(id: number) {
    return this.communityRepository.delete(id);
  }
}
