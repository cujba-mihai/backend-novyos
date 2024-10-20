import { Controller, UseGuards } from '@nestjs/common';
import { CampaignsService } from './campaigns.service';
import { CreateCampaignDto } from './dto/create-campaign.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { Crud, CrudController } from '@dataui/crud';
import { CampaignEntity } from './infrastructure/persistence/relational/entities/campaign.entity';
import { CampaignDto } from './dto/campaign.dto';
import { UpdateCampaignDto } from './dto/update-campaign.dto';

@ApiTags('Campaigns')
@ApiBearerAuth()
@UseGuards(AuthGuard('jwt'))
@Crud({
  model: {
    type: CampaignDto,
  },
  dto: {
    create: CreateCampaignDto,
    update: UpdateCampaignDto,
    replace: UpdateCampaignDto,
  },
  params: {
    id: {
      field: 'id',
      type: 'uuid',
      primary: true,
    },
  },
  query: {
    join: {
      company: {
        eager: false,
      },
    },
  },
})
@Controller({
  path: 'campaigns',
  version: '1',
})
export class CampaignsController implements CrudController<CampaignEntity> {
  constructor(public service: CampaignsService) {}
}
