import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, MaxLength, MinLength } from 'class-validator';
import { VersionConstants } from 'src/@shared/constant/version.constant';
import { ICreateVersionDto } from 'src/@shared/types/dtos/version.dto';

const { fieldsConstraints: limits } = VersionConstants;

export class CreateVersionDto implements ICreateVersionDto {
  /**
   * Non nullable properties
   */
  @IsNotEmpty()
  @MinLength(limits.label.minLength)
  @MaxLength(limits.label.maxLength)
  @ApiProperty({
    minLength: limits.label.minLength,
    maxLength: limits.label.maxLength,
  })
  label: string;
}
