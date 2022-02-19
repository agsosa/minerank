import { ApiProperty } from '@nestjs/swagger';
import {
  IsEnum,
  IsISO31661Alpha2,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsUrl,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';
import { CommunityConstants } from 'src/shared/constants/community.constant';
import { ICreateCommunityDto } from 'src/shared/types/dtos/community.dto';
import { EditionEnum, PremiumTypeEnum } from 'src/shared/types/enum/community.enum';

const { fieldsConstraints: constraints } = CommunityConstants;

export class CreateCommunityDto implements ICreateCommunityDto {
  @IsNotEmpty()
  @MinLength(constraints.name.minLength)
  @MaxLength(constraints.name.maxLength)
  @ApiProperty({
    minLength: constraints.name.minLength,
    maxLength: constraints.name.maxLength,
  })
  name: string;

  @IsNotEmpty()
  @MinLength(constraints.description.minLength)
  @MaxLength(constraints.description.maxLength)
  @ApiProperty({
    minLength: constraints.description.minLength,
    maxLength: constraints.description.maxLength,
  })
  description: string;

  @IsNotEmpty()
  @MinLength(constraints.shortName.minLength)
  @MaxLength(constraints.shortName.maxLength)
  @Matches(constraints.shortName.regex)
  @ApiProperty({
    minLength: constraints.shortName.minLength,
    maxLength: constraints.shortName.maxLength,
    pattern: constraints.shortName.regex.toString(),
  })
  shortName: string;

  @IsNotEmpty()
  @MinLength(constraints.ip.minLength)
  @MaxLength(constraints.ip.maxLength)
  @ApiProperty({
    minLength: constraints.ip.minLength,
    maxLength: constraints.ip.maxLength,
  })
  ip: string;

  @IsNotEmpty()
  @IsEnum(EditionEnum)
  @ApiProperty({
    enum: EditionEnum,
  })
  edition: EditionEnum;

  @IsNotEmpty()
  @IsEnum(PremiumTypeEnum)
  @ApiProperty({
    example: PremiumTypeEnum.PREMIUM,
    enum: PremiumTypeEnum,
  })
  premiumType: PremiumTypeEnum;

  @IsNotEmpty()
  @IsISO31661Alpha2()
  @ApiProperty({
    example: 'US',
    description: 'Country Code (ISO 3166-1 alpha-2)',
  })
  countryCode: string;

  @IsOptional()
  @IsUrl()
  @ApiProperty({
    required: false,
  })
  youtubeTrailer?: string;

  version: string;
  gamemodes: string;

  @IsOptional()
  @IsNumber()
  @IsPositive()
  @ApiProperty({
    description: 'default: 25565 for Java and 19132 for Bedrock',
    example: 25523,
    required: false,
  })
  port?: number;

  // TODO: Add urls lengths?
  @IsOptional()
  @IsUrl()
  @ApiProperty({
    required: false,
  })
  website?: string;

  @IsOptional()
  @IsUrl()
  @ApiProperty({
    required: false,
  })
  twitter?: string;

  @IsOptional()
  @IsUrl()
  @ApiProperty({
    required: false,
  })
  youtube?: string;

  @IsOptional()
  @IsUrl()
  @ApiProperty({
    required: false,
  })
  instagram?: string;

  @IsOptional()
  @MinLength(5)
  @MaxLength(253)
  @ApiProperty({
    required: false,
  })
  teamspeak?: string;

  @IsOptional()
  @IsUrl()
  @ApiProperty({
    required: false,
  })
  discord?: string;

  @IsOptional()
  @IsUrl()
  @ApiProperty({
    required: false,
  })
  facebook?: string;

  @IsOptional()
  @MinLength(5)
  @MaxLength(253)
  @ApiProperty({
    required: false,
  })
  telegram?: string;
}
