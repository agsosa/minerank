import { PartialType } from '@nestjs/mapped-types';
import { IUpdateCommunityDto } from 'src/shared/types/dtos/community.dto';
import { CreateCommunityDto } from './create-community.dto';

// TODO: Check if validations works due to extends create-community.dto
export class UpdateCommunityDto
  extends PartialType(CreateCommunityDto)
  implements IUpdateCommunityDto {}
