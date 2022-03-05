import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCommunityDto } from './dto/create-community.dto';
import { UpdateCommunityDto } from './dto/update-community.dto';
import { Community } from './community.entity';
import { SearchCommunityDto } from './dto/search-community.dto';
import { IPaginatedDto } from 'src/shared/types/dtos/paginated.dto';
import { ICommunity } from 'src/shared/types/entities/ICommunity';

@Injectable()
export class CommunityService {
  constructor(
    @InjectRepository(Community)
    private communityRepository: Repository<Community>,
  ) {}

  create(createCommunityDto: CreateCommunityDto) {
    return this.communityRepository.insert(createCommunityDto);
  }

  async findAll(page = 1, limit = 10): Promise<IPaginatedDto<ICommunity>> {
    const [items, total] = await this.communityRepository.findAndCount({
      order: {
        upvotes: 'DESC',
      },
      where: {
        isFeatured: false,
      },
      skip: limit * (page - 1),
      take: limit,
    });

    const maxPage = Math.ceil(total / limit);

    return {
      total,
      page,
      perPage: limit,
      maxPage,
      items,
    };
  }

  search(searchCommunityDto: SearchCommunityDto) {
    // TODO: Add pagination, LIKE parameters, etc.
    return this.communityRepository.find({
      where: searchCommunityDto,
    });
  }

  findOne(shortName: string) {
    return this.communityRepository.findOne({ shortName });
  }

  findAllShortNames() {
    return this.communityRepository.find({
      select: ['shortName'],
    });
  }

  update(id: number, updateCommunityDto: UpdateCommunityDto) {
    return `This action updates a #${id} server`;
  }

  remove(id: number) {
    return this.communityRepository.delete(id);
  }
}
