import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsDate, IsNotEmpty, IsString } from 'class-validator';
import { Campaign } from '../../campaigns/domain/campaign';

export class Company {
  @ApiProperty({
    description: 'Unique identifier of the company',
    type: String,
    format: 'uuid',
  })
  @IsString()
  @IsNotEmpty()
  id: string;

  @ApiProperty({
    description: 'Name of the company',
    type: String,
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'Creation date of the company',
    type: Date,
  })
  @IsDate()
  createdAt: Date;

  @ApiProperty({
    description: 'Last updated date of the company',
    type: Date,
  })
  @IsDate()
  updatedAt: Date;

  @ApiProperty({
    description: 'List of campaigns associated with the company',
    type: [Campaign],
  })
  @IsArray()
  campaigns: Campaign[];
}
