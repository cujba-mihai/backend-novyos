import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Company } from '../../companies/domain/company';

export class Campaign {
  @ApiProperty({
    type: String,
  })
  id: string;

  @ApiProperty({
    type: String,
  })
  name: string;

  @ApiProperty({
    type: String,
  })
  description: string;

  @ApiPropertyOptional({
    type: () => Company,
  })
  company: Company;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
