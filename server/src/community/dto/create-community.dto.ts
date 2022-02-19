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
import { CommunityConstants } from 'src/shared/types/constants/community.constants';
import { ICreateCommunityDto } from 'src/shared/types/dtos/ICreateCommunityDto';
import { Edition, PremiumType } from 'src/shared/types/enums/servers.enums';

const { fieldsConstraints: constraints } = CommunityConstants;

export class CreateCommunityDto implements ICreateCommunityDto {
  // TODO: Add version, gamemodes

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
    pattern: '[A-Za-z0-9_-]*',
  })
  shortName: string;

  @IsNotEmpty()
  @MinLength(5)
  @MaxLength(253)
  @ApiProperty({
    minLength: 5,
    maxLength: 253,
  })
  ip: string;

  @IsNotEmpty()
  @IsEnum(PremiumType)
  @ApiProperty({
    example: PremiumType.PREMIUM,
    enum: PremiumType,
  })
  premiumType: PremiumType;

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

  @IsOptional()
  @IsNumber()
  @IsPositive()
  @ApiProperty({
    description: 'default: 25565 for Java and 19132 for Bedrock',
    example: 25523,
    required: false,
  })
  port?: number;

  @IsOptional()
  @IsEnum(Edition)
  @ApiProperty({
    description: 'The Minecraft edition of the server',
    example: Edition.BEDROCK,
    enum: Edition,
    required: false,
    default: Edition.JAVA,
  })
  edition?: Edition;

  @IsOptional()
  @IsUrl()
  @ApiProperty({
    description: "The server's website URL",
    required: false,
    example: 'https://minecraft.com',
  })
  website?: string;

  @IsOptional()
  @IsUrl()
  @ApiProperty({
    description: "The server's Twitter URL",
    required: false,
    example: 'https://twitter.com/minecraft',
  })
  twitter?: string;

  @IsOptional()
  @IsUrl()
  @ApiProperty({
    description: "The server's Youtube URL",
    required: false,
    example: 'https://youtube.com/minecraft',
  })
  youtube?: string;

  @IsOptional()
  @IsUrl()
  @ApiProperty({
    description: "The server's Instagram URL",
    required: false,
    example: 'https://instagram.com/minecraft',
  })
  instagram?: string;

  @IsOptional()
  @MinLength(5)
  @MaxLength(253)
  @ApiProperty({
    description: "The server's Teamspeak IP",
    required: false,
    example: 'ts3.minecraft.com',
  })
  teamspeak?: string;

  @IsOptional()
  @IsUrl()
  @ApiProperty({
    description: "The server's Discord URL",
    required: false,
    example: 'https://discord.com/minecraft',
  })
  discord?: string;

  @IsOptional()
  @IsUrl()
  @ApiProperty({
    description: "The server's Facebook URL",
    required: false,
    example: 'https://facebook.com/minecraft',
  })
  facebook?: string;

  @IsOptional()
  @MinLength(5)
  @MaxLength(253)
  @ApiProperty({
    description: "The server's Telegram URL",
    required: false,
    example: 'https://telegram.com/minecraft',
  })
  telegram?: string;
}
