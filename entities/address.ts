import { DOMAIN, ulidGenerator } from '@shared/utils'
import { BeforeInsert, Column, Entity } from 'typeorm'
import { Base } from './base'

@Entity('addresses')
export class Address extends Base {
  @Column({
    type: 'varchar',
    length: 120,
  })
  street!: string

  @Column({
    type: 'varchar',
    length: 20,
  })
  number!: string

  @Column({
    type: 'varchar',
    length: 120,
  })
  neighborhood!: string

  @Column({
    type: 'varchar',
    length: 60,
  })
  city!: string

  @Column({
    type: 'varchar',
    length: 60,
  })
  state!: string

  @Column({
    type: 'varchar',
    length: 60,
  })
  country!: string

  @Column({
    type: 'varchar',
    length: 9,
    name: 'zip_code',
  })
  zipCode!: string

  @Column({
    type: 'varchar',
    length: 120,
    nullable: true,
  })
  complement?: string

  @BeforeInsert()
  protected generateId() {
    this.id = ulidGenerator(DOMAIN.address)
  }
}
