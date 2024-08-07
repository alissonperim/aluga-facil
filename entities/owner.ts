import { BeforeInsert, Column, Entity, JoinTable, ManyToMany } from 'typeorm'
import { PersonalData } from './personal-data'
import { Property } from './property'
import { DOMAIN, ulidGenerator } from '@shared/utils'
import { MaritalStatus } from '@packages/types'

@Entity('owners')
export class Owner extends PersonalData {
  @ManyToMany(() => Property, property => property.owners)
  @JoinTable()
  properties!: Property[]

  @Column({
    type: 'simple-array',
    name: 'properties_ids',
    nullable: true,
  })
  propertiesIds!: string[]

  @Column({
    type: 'enum',
    enum: MaritalStatus,
  })
  maritalStatus!: MaritalStatus

  @BeforeInsert()
  generateUlid() {
    this.id = ulidGenerator(DOMAIN.owner)
  }
}
