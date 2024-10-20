---
to: src/<%= h.inflection.transform(name, ['pluralize', 'underscore', 'dasherize']) %>/<%= h.inflection.transform(name, ['pluralize', 'underscore', 'dasherize']) %>.service.ts
---
import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@dataui/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { <%= name %>Entity } from './infrastructure/persistence/relational/entities/<%= h.inflection.transform(name, ['underscore', 'dasherize']) %>.entity';
import { Repository } from 'typeorm';

@Injectable()
export class <%= h.inflection.transform(name, ['pluralize']) %>Service extends TypeOrmCrudService<<%= name %>Entity> {
  constructor(@InjectRepository(<%= name %>Entity) repo: Repository<<%= name %>Entity>) {
    super(repo);
  }
}
