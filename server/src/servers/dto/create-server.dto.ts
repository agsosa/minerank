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
import { Edition, PremiumType } from 'shared/enums/servers.enums';
import { ICreateServerDto } from 'shared/interfaces/servers.interface';

export class CreateServerDto implements ICreateServerDto {
  // TODO: Add version, gamemodes

  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(36)
  @ApiProperty({
    description: "The server's name",
    example: 'Mine Server 1990',
    minLength: 3,
    maxLength: 36,
  })
  name: string;

  @IsNotEmpty()
  @MinLength(10)
  @MaxLength(280)
  @ApiProperty({
    description: "The server's description",
    example: 'This server is awesome! Join us for a fun time!',
    minLength: 10,
    maxLength: 280,
  })
  description: string;

  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(24)
  @Matches(/^[A-Za-z0-9-]*$/)
  @ApiProperty({
    description:
      "The server's short name to use as URL path. Only letters, numbers and dashes are allowed.",
    example: 'mine-server',
    minLength: 3,
    maxLength: 24,
    pattern: '[A-Za-z0-9_-]*',
  })
  path: string;

  @IsNotEmpty()
  @MinLength(5)
  @MaxLength(253)
  @ApiProperty({
    description: "The server's IP address",
    example: 'play.mine-server.com',
    minLength: 5,
    maxLength: 253,
  })
  ip: string;

  @IsNotEmpty()
  @IsEnum(PremiumType)
  @ApiProperty({
    description: "The server's premium restriction",
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
    example: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    description: 'Youtube video to display as a trailer',
    required: false,
  })
  youtubeTrailer?: string;

  @IsOptional()
  @IsNumber()
  @IsPositive()
  @ApiProperty({
    description: "The server's port number (default: 25565 for Java and 19132 for Bedrock)",
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
