import { ApiProperty } from '@dataui/crud/lib/crud';
import { IsNotEmpty } from 'class-validator';
import { Campaign } from '../domain/campaign';
import { Company } from '../../companies/domain/company';
import { PickType } from '@nestjs/swagger';

export class CreateCampaignDto implements Partial<Campaign> {
  @IsNotEmpty()
  @ApiProperty({ type: String })
  name: string;

  @IsNotEmpty()
  @ApiProperty({ type: String })
  description: string;

  @IsNotEmpty()
  @ApiProperty({ type: () => PickType(Company, ['id']) })
  company: Company;
}
