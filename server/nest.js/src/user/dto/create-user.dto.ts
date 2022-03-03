import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, MaxLength, MinLength } from 'class-validator';
import { CommunityConstants } from 'src/shared/constant/community.constant';
import { ICreateUserDto } from 'src/shared/types/dtos/user.dto';

const { fieldsConstraints: constraints } = CommunityConstants;

export class CreateUserDto implements ICreateUserDto {
  /**
   * Non nullable properties
   */
  @IsNotEmpty()
  @MinLength(constraints.name.minLength)
  @MaxLength(constraints.name.maxLength)
  @ApiProperty({
    minLength: constraints.name.minLength,
    maxLength: constraints.name.maxLength,
  })
  username: string;

  @IsNotEmpty()
  @MinLength(constraints.description.minLength)
  @MaxLength(constraints.description.maxLength)
  @IsEmail()
  @ApiProperty({
    minLength: constraints.description.minLength,
    maxLength: constraints.description.maxLength,
  })
  email: string;

  @IsNotEmpty()
  @MinLength(constraints.shortName.minLength)
  @MaxLength(constraints.shortName.maxLength)
  @ApiProperty({
    minLength: constraints.shortName.minLength,
    maxLength: constraints.shortName.maxLength,
  })
  password: string;
}
