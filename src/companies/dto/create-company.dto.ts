import { ApiProperty } from '@nestjs/swagger';
import { IsString, MaxLength, MinLength } from 'class-validator';

export class CreateCompanyDto {
  @ApiProperty({ example: 'Microsoft', type: String })
  @IsString()
  @MinLength(3)
  @MaxLength(50)
  name: string;
}
