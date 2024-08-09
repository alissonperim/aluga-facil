import { BeforeInsert, Column, Entity } from 'typeorm'
import { PersonalData } from './personal-data'
import { DOMAIN, ulidGenerator } from '@shared/utils'

@Entity()
export class Guarantor extends PersonalData {
  constructor() {
    super()
  }

  @Column({
    type: 'varchar',
    length: 24,
  })
  incomeProof!: string

  @BeforeInsert()
  protected generateId() {
    this.id = ulidGenerator(DOMAIN.guarantor)
  }
}
