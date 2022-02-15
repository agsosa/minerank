import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateServerDto } from './dto/create-server.dto';
import { UpdateServerDto } from './dto/update-server.dto';
import { Server } from './entities/server.entity';

@Injectable()
export class ServersService {
  constructor(
    @InjectRepository(Server)
    private serversRepository: Repository<Server>,
  ) {}

  create(createServerDto: CreateServerDto) {
    return this.serversRepository.insert(createServerDto);
  }

  findAll() {
    return this.serversRepository.find();
  }

  findOne(id: number) {
    return this.serversRepository.findOne(id);
  }

  update(id: number, updateServerDto: UpdateServerDto) {
    return `This action updates a #${id} server`;
  }

  remove(id: number) {
    return this.serversRepository.delete(id);
  }
}
