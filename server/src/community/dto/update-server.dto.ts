import { PartialType } from '@nestjs/mapped-types';
import { CreateCommunityDto } from './create-community.dto';

export class UpdateServerDto extends PartialType(CreateCommunityDto) {}
