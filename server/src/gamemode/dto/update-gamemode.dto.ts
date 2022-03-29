import { PartialType } from '@nestjs/mapped-types';
import { CreateGamemodeDto } from './create-gamemode.dto';

export class UpdateGamemodeDto extends PartialType(CreateGamemodeDto) {}
