import {
  IsEnum,
  IsISO31661Alpha2,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsUrl,
  MaxLength,
  MinLength,
} from 'class-validator';
import { Edition, PremiumType } from '../shared/server.enums';

export class CreateServerDto {
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(36)
  name: string;

  @IsNotEmpty()
  @MinLength(10)
  @MaxLength(280)
  description: string;

  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(24)
  path: string;

  @IsNotEmpty()
  @MinLength(5)
  @MaxLength(253)
  ip: string;

  @IsOptional()
  @IsUrl()
  youtubeTrailer?: string;

  @IsOptional()
  @IsNumber()
  @IsPositive()
  port?: number;

  @IsNotEmpty()
  @IsEnum(PremiumType)
  premiumType: PremiumType;

  @IsNotEmpty()
  @IsISO31661Alpha2()
  countryCode: string;

  @IsOptional()
  @IsEnum(Edition)
  edition?: Edition;

  @IsOptional()
  @IsUrl()
  website?: string;

  @IsOptional()
  @IsUrl()
  twitter?: string;

  @IsOptional()
  @IsUrl()
  youtube?: string;

  @IsOptional()
  @IsUrl()
  instagram?: string;

  @IsOptional()
  @MinLength(5)
  @MaxLength(253)
  teamspeak?: string;

  @IsOptional()
  @IsUrl()
  discord?: string;

  @IsOptional()
  @IsUrl()
  facebook?: string;

  @IsOptional()
  @MinLength(5)
  @MaxLength(253)
  telegram?: string;
}
