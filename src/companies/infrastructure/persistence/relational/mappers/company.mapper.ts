import { Company } from '../../../../domain/company';
import { CompanyEntity } from '../entities/company.entity';

export class CompanyMapper {
  static toDomain(raw: CompanyEntity): Company {
    const domainEntity = new Company();
    domainEntity.id = raw.id;
    domainEntity.name = raw.name;
    domainEntity.createdAt = raw.createdAt;
    domainEntity.updatedAt = raw.updatedAt;

    return domainEntity;
  }

  static toPersistence(domainEntity: Company): CompanyEntity {
    const persistenceEntity = new CompanyEntity();
    if (domainEntity.id) {
      persistenceEntity.id = domainEntity.id;
    }
    persistenceEntity.name = domainEntity.name;
    persistenceEntity.createdAt = domainEntity.createdAt;
    persistenceEntity.updatedAt = domainEntity.updatedAt;

    return persistenceEntity;
  }
}
