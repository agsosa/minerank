import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, Matches, MaxLength, MinLength } from 'class-validator';
import { GameModeConstants } from 'src/@shared/constant/gamemode.constant';
import { ICreateGameModeDto } from 'src/@shared/types/dtos/gamemode.dto';

const { fieldsConstraints: constraints } = GameModeConstants;

export class CreateGamemodeDto implements ICreateGameModeDto {
  /**
   * Non nullable properties
   */
  @IsNotEmpty()
  @MinLength(constraints.label_es.minLength)
  @MaxLength(constraints.label_es.maxLength)
  @ApiProperty({
    minLength: constraints.label_es.minLength,
    maxLength: constraints.label_es.maxLength,
  })
  label_es: string;

  @IsNotEmpty()
  @MinLength(constraints.label_en.minLength)
  @MaxLength(constraints.label_en.maxLength)
  @ApiProperty({
    minLength: constraints.label_en.minLength,
    maxLength: constraints.label_en.maxLength,
  })
  label_en: string;

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
}
