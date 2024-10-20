import { Module } from '@nestjs/common';
import { CampaignsService } from './campaigns.service';
import { CampaignsController } from './campaigns.controller';
import { RelationalCampaignPersistenceModule } from './infrastructure/persistence/relational/relational-persistence.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CampaignEntity } from './infrastructure/persistence/relational/entities/campaign.entity';

@Module({
  imports: [
    // import modules, etc.
    TypeOrmModule.forFeature([CampaignEntity]),
    RelationalCampaignPersistenceModule,
  ],
  controllers: [CampaignsController],
  providers: [CampaignsService],
  exports: [CampaignsService, RelationalCampaignPersistenceModule],
})
export class CampaignsModule {}
