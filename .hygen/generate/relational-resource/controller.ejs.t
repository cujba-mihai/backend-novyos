---
to: src/<%= h.inflection.transform(name, ['pluralize', 'underscore', 'dasherize']) %>/<%= h.inflection.transform(name, ['pluralize', 'underscore', 'dasherize']) %>.controller.ts
---
import { Controller, UseGuards } from '@nestjs/common';
import { <%= h.inflection.transform(name, ['pluralize']) %>Service } from './<%= h.inflection.transform(name, ['pluralize', 'underscore', 'dasherize']) %>.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { <%= name %> } from './domain/<%= h.inflection.transform(name, ['underscore', 'dasherize']) %>';
import { AuthGuard } from '@nestjs/passport';
import { Crud, CrudController } from '@dataui/crud';

@ApiTags('<%= h.inflection.transform(name, ['pluralize', 'humanize']) %>')
@ApiBearerAuth()
@UseGuards(AuthGuard('jwt'))
@Crud({
  model: {
    type: <%= name %>,
  },
  params: {
    id: {
      field: 'id',
      type: 'uuid',
      primary: true,
    },
  },
  query: {},
})
@Controller({
  path: '<%= h.inflection.transform(name, ['pluralize', 'underscore', 'dasherize']) %>',
  version: '1',
})
export class <%= h.inflection.transform(name, ['pluralize']) %>Controller implements CrudController<<%= name %>> {
  constructor(public service: <%= h.inflection.transform(name, ['pluralize']) %>Service) {}
}
