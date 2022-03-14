import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCommunityDto } from './dto/create-community.dto';
import { UpdateCommunityDto } from './dto/update-community.dto';
import { Community } from './community.entity';
import { SearchCommunityDto } from './dto/search-community.dto';
import { ICommunity } from 'src/shared/types/entities/ICommunity';
import { IFindCommunitiesResponseDto } from 'src/shared/types/dtos/community.dto';
import { CommunityConstants } from 'src/shared/constant/community.constant';

@Injectable()
export class CommunityService {
  constructor(
    @InjectRepository(Community)
    private communityRepository: Repository<Community>,
  ) {}

  create(createCommunityDto: CreateCommunityDto) {
    return this.communityRepository.insert(createCommunityDto);
  }

  async findAll(
    page = 1,
    limit = CommunityConstants.limits.perPageCount,
  ): Promise<IFindCommunitiesResponseDto> {
    const promises: Promise<any>[] = [];

    let total = 0;
    let normal: ICommunity[] = [];
    let featured: ICommunity[] = [];
    let latest: ICommunity[] = [];

    // Get communities (excludes featured)
    promises.push(
      this.communityRepository
        .findAndCount({
          order: {
            upvotes: 'DESC',
          },
          where: {
            isFeatured: false,
          },
          skip: limit * (page - 1),
          take: limit,
        })
        .then(([_items, _total]) => {
          normal = _items;
          total = _total;
        }),
    );

    // Add featured & latest communities if it's the first page
    if (page === 1) {
      // Featured
      promises.push(
        this.search({
          isFeatured: true,
        }).then((res) => {
          featured = res;
        }),
      );

      // Latest communities
      promises.push(
        this.communityRepository
          .find({
            order: {
              createdAt: 'DESC',
            },
            take: CommunityConstants.limits.latestCount,
          })
          .then((res) => {
            latest = res;
          }),
      );
    }

    const maxPage = Math.ceil(total / limit);

    await Promise.all(promises);

    return {
      total,
      page,
      perPage: limit,
      maxPage,
      items: {
        featured,
        latest,
        normal,
      },
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

  async findAllShortNames() {
    const result = await this.communityRepository.find({
      select: ['shortName'],
    });

    return Array.isArray(result) ? result.map((elem) => elem.shortName) : [];
  }

  update(id: number, updateCommunityDto: UpdateCommunityDto) {
    return `This action updates a #${id} server`;
  }

  remove(id: number) {
    return this.communityRepository.delete(id);
  }
}
