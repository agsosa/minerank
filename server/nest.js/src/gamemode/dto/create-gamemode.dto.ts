import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, Matches, MaxLength, MinLength } from 'class-validator';
import { GameModeConstants } from 'src/@shared/constant/gamemode.constant';
import { ICreateGameModeDto } from 'src/@shared/types/dtos/gamemode.dto';

const { fieldsConstraints: limits } = GameModeConstants;

export class CreateGamemodeDto implements ICreateGameModeDto {
  /**
   * Non nullable properties
   */
  @IsNotEmpty()
  @MinLength(limits.label_es.minLength)
  @MaxLength(limits.label_es.maxLength)
  @ApiProperty({
    minLength: limits.label_es.minLength,
    maxLength: limits.label_es.maxLength,
  })
  label_es: string;

  @IsNotEmpty()
  @MinLength(limits.label_en.minLength)
  @MaxLength(limits.label_en.maxLength)
  @ApiProperty({
    minLength: limits.label_en.minLength,
    maxLength: limits.label_en.maxLength,
  })
  label_en: string;

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
}
