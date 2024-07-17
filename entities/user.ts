import { MaritalStatus } from '@packages/types'
import { DOMAIN, ulidGenerator } from '@shared/utils'
import { BeforeInsert, Column, Entity } from 'typeorm'
import { PersonalData } from './personal-data'

@Entity('users')
export class User extends PersonalData {
  @Column({
    type: 'enum',
    enum: MaritalStatus,
  })
  maritalStatus!: MaritalStatus

  @BeforeInsert()
  protected generateId() {
    this.id = ulidGenerator(DOMAIN.user)
  }
}
