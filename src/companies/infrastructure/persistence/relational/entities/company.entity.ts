import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { EntityRelationalHelper } from '../../../../../utils/relational-entity-helper';
import { CampaignEntity } from '../../../../../campaigns/infrastructure/persistence/relational/entities/campaign.entity';

@Entity({
  name: 'company',
})
export class CompanyEntity extends EntityRelationalHelper {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar' })
  name: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => CampaignEntity, (campaign) => campaign.company)
  campaigns: CampaignEntity[];
}
