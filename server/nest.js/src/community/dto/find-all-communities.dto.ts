import { IsNumber, IsOptional } from 'class-validator';
import { IFindAllCommunitiesDto } from 'src/shared/types/dtos/community.dto';

export class FindAllCommunitiesDto implements IFindAllCommunitiesDto {
  @IsOptional()
  @IsNumber()
  page: number;

  @IsOptional()
  @IsNumber()
  limit: number;
}
