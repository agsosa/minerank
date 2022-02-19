import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const insertResult = await this.userRepository.insert(createUserDto);

    if (insertResult.identifiers.length === 0) {
      throw new InternalServerErrorException('Failed to insert user');
    }

    const findResult = await this.userRepository.findOne(insertResult.identifiers[0].id);

    if (!findResult) {
      throw new InternalServerErrorException('Failed to created user');
    }

    return findResult;
  }

  findAll() {
    return this.userRepository.find();
  }

  findByEmail(email: string) {
    return this.userRepository.findOne({ email });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user with ${JSON.stringify(updateUserDto)}`;
  }

  remove(id: number) {
    return this.userRepository.delete(id);
  }
}
