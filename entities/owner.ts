import { Column, Entity, JoinTable, ManyToMany } from 'typeorm'
import { PersonalData } from './personal-data'
import { Property } from './property'

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
}
