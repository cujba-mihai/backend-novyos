import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CampaignEntity } from './infrastructure/persistence/relational/entities/campaign.entity';
import { TypeOrmCrudService } from '@dataui/crud-typeorm';

@Injectable()
export class CampaignsService extends TypeOrmCrudService<CampaignEntity> {
  constructor(@InjectRepository(CampaignEntity) repo) {
    super(repo);
  }
}
