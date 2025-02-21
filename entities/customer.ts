import { MaritalStatus } from '@packages/types'
import { DOMAIN, ulidGenerator } from '@shared/utils'
import { BeforeInsert, Column, Entity, JoinColumn, ManyToOne } from 'typeorm'
import { PersonalData } from './personal-data'
import { Company } from './company'

@Entity('customers')
export class Customer extends PersonalData {
  @Column({
    type: 'enum',
    enum: MaritalStatus,
  })
  maritalStatus!: MaritalStatus

  @ManyToOne(() => Company, company => company.users, { eager: false, nullable: true })
  @JoinColumn()
  company!: Company

  @Column({
    nullable: true,
    name: 'company_id',
    type: 'varchar',
  })
  companyId!: string

  @BeforeInsert()
  protected generateId() {
    this.id = ulidGenerator(DOMAIN.customer)
  }
}
