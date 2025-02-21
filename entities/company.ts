import { BeforeInsert, Column, Entity, JoinTable, ManyToOne } from 'typeorm'
import { PersonalData } from './personal-data'
import { DOMAIN, ulidGenerator } from '@shared/utils'
import { Customer } from './customer'

@Entity('owners')
export class Company extends PersonalData {
  @ManyToOne(() => Customer, user => user.company)
  @JoinTable()
  users!: Customer[]

  @Column({
    type: 'simple-array',
    name: 'users_ids',
    nullable: true,
  })
  usersIds!: string[]

  @Column({
    type: 'bool',
  })
  status!: boolean

  @BeforeInsert()
  generateUlid() {
    this.id = ulidGenerator(DOMAIN.company)
  }
}
