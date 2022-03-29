import { PartialType } from '@nestjs/mapped-types';
import { IUpdateUserDto } from 'src/@shared/types/dtos/user.dto';
import { CreateUserDto } from './create-user.dto';

// TODO: Check if validations works due to extends create-community.dto
export class UpdateUserDto extends PartialType(CreateUserDto) implements IUpdateUserDto {}
