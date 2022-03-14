import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCommunityDto } from './dto/create-community.dto';
import { UpdateCommunityDto } from './dto/update-community.dto';
import { Community } from './community.entity';
import { IListCommunity } from 'src/shared/types/entities/ICommunity';
import {
  IFindShortNamesResponseDto,
  ISearchCommunitiesResponseDto,
  IFindCommunityResponseDto,
  IFindAllCommunitiesResponseDto,
} from 'src/shared/types/dtos/community.dto';
import { CommunityConstants } from 'src/shared/constant/community.constant';
import { FindCommunitiesDto } from './dto/find-communities.dto';

@Injectable()
export class CommunityService {
  constructor(
    @InjectRepository(Community)
    private communityRepository: Repository<Community>,
  ) {}

  create(createCommunityDto: CreateCommunityDto) {
    return this.communityRepository.insert(createCommunityDto);
  }

  async findAll(): Promise<IFindAllCommunitiesResponseDto> {
    const [items, total] = await this.communityRepository.findAndCount({
      isDeleted: false,
    });

    let featured = 0,
      approved = 0;

    for (const item of items) {
      if (item.isFeatured) featured++;
      if (item.isApproved) approved++;
    }

    return {
      items,
      total,
      featured,
      approved,
      unapproved: total - approved,
    };
  }

  async search({
    page,
    limit,
    filter,
    separateFeatured,
    includeUnapproved,
    includeLatest,
  }: FindCommunitiesDto): Promise<ISearchCommunitiesResponseDto> {
    const promises: Promise<any>[] = [];

    let total = 0;
    let normal: IListCommunity[] = [];
    let featured: IListCommunity[] = [];
    let latest: IListCommunity[] = [];

    const where: any = { ...filter };
    if (separateFeatured) where.isFeatured = false;
    if (!includeUnapproved) where.isApproved = true;
    where.isDeleted = false;

    // Get communities (excludes featured)
    promises.push(
      this.communityRepository
        .findAndCount({
          order: {
            upvotes: 'DESC',
          },
          where,
          skip: limit * (page - 1),
          take: limit,
        })
        .then(([_items, _total]) => {
          normal = _items.map((elem) => elem.toListMember());
          total = _total;
        }),
    );

    // Find featured communities
    if (separateFeatured)
      promises.push(
        this.communityRepository
          .find({
            where: { isFeatured: true },
          })
          .then((res) => {
            featured = res;
          }),
      );

    // Find latest communities
    if (includeLatest)
      promises.push(
        this.communityRepository
          .find({
            order: {
              createdAt: 'DESC',
            },
            take: CommunityConstants.limits.latestCount,
          })
          .then((res) => {
            latest = res.map((elem) => elem.toListMember());
          }),
      );

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

  findOne(shortName: string): Promise<IFindCommunityResponseDto> {
    return this.communityRepository.findOne({ shortName });
  }

  async findShortNames(): Promise<IFindShortNamesResponseDto> {
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
