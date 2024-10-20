import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsArray, IsDate } from 'class-validator';
import { CampaignDto } from '../../campaigns/dto/campaign.dto';

export class CompanyDto {
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

  @ApiPropertyOptional({
    description: 'List of campaigns associated with the company',
    type: [CampaignDto],
  })
  @IsArray()
  campaigns: CampaignDto[];
}
