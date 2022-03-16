import { IsNumber, IsObject, IsOptional, IsPositive, Max } from 'class-validator';
import { ICommunityFilters, ISearchCommunitiesDto } from 'src/@shared/types/dtos/community.dto';

export class FindCommunitiesDto implements ISearchCommunitiesDto {
  @IsNumber()
  @IsPositive()
  page: number;

  @IsNumber()
  @IsPositive()
  @Max(20)
  limit: number;

  @IsOptional()
  filter: ICommunityFilters;

  @IsOptional()
  separateFeatured?: boolean;

  @IsOptional()
  includeLatest?: boolean;

  @IsOptional()
  includeUnapproved?: boolean;
}
