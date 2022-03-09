import { IsNumber, IsOptional } from 'class-validator';
import { IFindCommunitiesDto } from 'src/shared/types/dtos/community.dto';

export class FindAllCommunitiesDto implements IFindCommunitiesDto {
  @IsOptional()
  @IsNumber()
  page: number;

  @IsOptional()
  @IsNumber()
  limit: number;
}
