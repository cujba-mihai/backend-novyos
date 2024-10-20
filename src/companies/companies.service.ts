import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@dataui/crud-typeorm';
import { CompanyEntity } from './infrastructure/persistence/relational/entities/company.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CompaniesService extends TypeOrmCrudService<CompanyEntity> {
  constructor(@InjectRepository(CompanyEntity) repo) {
    super(repo);
  }
}
