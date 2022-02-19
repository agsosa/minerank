import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateServerDto } from './dto/create-server.dto';
import { UpdateServerDto } from './dto/update-server.dto';
import { Community } from './entities/server.entity';

@Injectable()
export class CommunityService {
  constructor(
    @InjectRepository(Community)
    private communityRepository: Repository<Community>,
  ) {}

  create(createCommunityDto: CreateServerDto) {
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
