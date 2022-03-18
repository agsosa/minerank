import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
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
import { CommunityConstants } from 'src/@shared/constant/community.constant';
import { ICreateCommunityDto } from 'src/@shared/types/dtos/community.dto';
import { EditionEnum, PremiumTypeEnum } from 'src/@shared/types/enum/community.enum';

const { fieldsConstraints: limits } = CommunityConstants;

export class CreateCommunityDto implements ICreateCommunityDto {
  /**
   * Non nullable properties
   */
  @IsNotEmpty()
  @MinLength(limits.name.minLength)
  @MaxLength(limits.name.maxLength)
  @ApiProperty({
    minLength: limits.name.minLength,
    maxLength: limits.name.maxLength,
  })
  name: string;

  @IsNotEmpty()
  @MinLength(limits.description.minLength)
  @MaxLength(limits.description.maxLength)
  @ApiProperty({
    minLength: limits.description.minLength,
    maxLength: limits.description.maxLength,
  })
  description: string;

  @IsNotEmpty()
  @MinLength(limits.shortName.minLength)
  @MaxLength(limits.shortName.maxLength)
  @Matches(limits.shortName.regex)
  @ApiProperty({
    minLength: limits.shortName.minLength,
    maxLength: limits.shortName.maxLength,
    pattern: limits.shortName.regex.toString(),
  })
  shortName: string;

  @IsNotEmpty()
  @MinLength(limits.ip.minLength)
  @MaxLength(limits.ip.maxLength)
  @ApiProperty({
    minLength: limits.ip.minLength,
    maxLength: limits.ip.maxLength,
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

  @IsNotEmpty()
  @ApiProperty()
  version: string;

  @IsNotEmpty()
  @ApiProperty()
  user: string;

  @IsNumber({}, { each: true })
  @IsNotEmpty()
  @ApiProperty()
  gamemodes: number[];

  /**
   * Nullable properties
   */

  @IsOptional()
  @IsUrl()
  @ApiProperty({
    required: false,
  })
  youtubeTrailer: string;

  @IsOptional()
  @IsNumber()
  @IsPositive()
  @ApiProperty({
    description: 'default: 25565 for Java and 19132 for Bedrock',
    required: false,
  })
  port: number;

  // TODO: Add urls lengths?
  @IsOptional()
  @IsUrl()
  @ApiProperty({
    required: false,
  })
  website: string;

  @IsOptional()
  @IsUrl()
  @ApiProperty({
    required: false,
  })
  twitter: string;

  @IsOptional()
  @IsUrl()
  @ApiProperty({
    required: false,
  })
  youtube: string;

  @IsOptional()
  @IsUrl()
  @ApiProperty({
    required: false,
  })
  instagram: string;

  @IsOptional()
  @MinLength(5)
  @MaxLength(253)
  @ApiProperty({
    required: false,
  })
  teamspeak: string;

  @IsOptional()
  @IsUrl()
  @ApiProperty({
    required: false,
  })
  discord: string;

  @IsOptional()
  @IsUrl()
  @ApiProperty({
    required: false,
  })
  facebook: string;

  @IsOptional()
  @MinLength(5)
  @MaxLength(253)
  @ApiProperty({
    required: false,
  })
  telegram: string;
}
