import { Module } from '@nestjs/common';
import { CompaniesService } from './companies.service';
import { CompaniesController } from './companies.controller';
import { RelationalCompanyPersistenceModule } from './infrastructure/persistence/relational/relational-persistence.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompanyEntity } from './infrastructure/persistence/relational/entities/company.entity';

@Module({
  imports: [
    // import modules, etc.
    TypeOrmModule.forFeature([CompanyEntity]),
    RelationalCompanyPersistenceModule,
  ],
  controllers: [CompaniesController],
  providers: [CompaniesService],
  exports: [CompaniesService, RelationalCompanyPersistenceModule],
})
export class CompaniesModule {}
