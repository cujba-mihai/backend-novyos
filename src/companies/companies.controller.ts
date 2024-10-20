import { Controller, UseGuards } from '@nestjs/common';
import { CompaniesService } from './companies.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { Crud, CrudController } from '@dataui/crud';
import { CompanyEntity } from './infrastructure/persistence/relational/entities/company.entity';
import { CompanyDto } from './dto/company.dto';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';

@ApiTags('Companies')
@ApiBearerAuth()
@UseGuards(AuthGuard('jwt'))
@Crud({
  model: {
    type: CompanyDto,
  },
  dto: {
    create: CreateCompanyDto,
    update: UpdateCompanyDto,
    replace: UpdateCompanyDto,
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
      campaigns: {
        eager: false,
      },
    },
  },
})
@Controller({
  path: 'companies',
  version: '1',
})
export class CompaniesController implements CrudController<CompanyEntity> {
  constructor(public service: CompaniesService) {}
}
