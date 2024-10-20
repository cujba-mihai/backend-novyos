import { CompanyMapper } from '../../../../../companies/infrastructure/persistence/relational/mappers/company.mapper';
import { Campaign } from '../../../../domain/campaign';
import { CampaignEntity } from '../entities/campaign.entity';

export class CampaignMapper {
  static toDomain(raw: CampaignEntity): Campaign {
    const domainEntity = new Campaign();
    domainEntity.id = raw.id;
    domainEntity.company = raw.company;
    domainEntity.name = raw.name;
    domainEntity.description = raw.description;
    domainEntity.createdAt = raw.createdAt;
    domainEntity.updatedAt = raw.updatedAt;

    return domainEntity;
  }

  static toPersistence(domainEntity: Campaign): CampaignEntity {
    const persistenceEntity = new CampaignEntity();
    if (domainEntity.id) {
      persistenceEntity.id = domainEntity.id;
    }
    persistenceEntity.company = CompanyMapper.toPersistence(
      domainEntity.company,
    );

    persistenceEntity.name = domainEntity.name;
    persistenceEntity.description = domainEntity.description;
    persistenceEntity.createdAt = domainEntity.createdAt;
    persistenceEntity.updatedAt = domainEntity.updatedAt;

    return persistenceEntity;
  }
}
