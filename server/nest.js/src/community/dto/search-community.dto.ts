import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsOptional } from 'class-validator';
import { ISearchCommunityDto } from 'src/shared/types/dtos/community.dto';

export class SearchCommunityDto implements ISearchCommunityDto {
  @IsOptional()
  @IsBoolean()
  @ApiProperty()
  isFeatured: boolean;
}
