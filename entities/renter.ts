import { BeforeInsert, Column, Entity, JoinColumn, OneToMany } from 'typeorm'
import { PersonalData } from './personal-data'
import { Property } from './property'
import { Contract } from './contract'
import { DOMAIN, ulidGenerator } from '@shared/utils'

@Entity('renters')
export class Renter extends PersonalData {
  @Column({
    name: 'document',
    type: 'varchar',
    length: 14,
    unique: true,
  })
  document!: string

  @Column({
    name: 'is_real_state',
    type: 'boolean',
    default: false,
  })
  isRealState: boolean

  @Column({
    name: 'fantasy_name',
    type: 'varchar',
    length: 120,
    nullable: true,
  })
  fantasyName!: string

  @OneToMany(() => Contract, contract => contract.renter)
  contracts!: Contract[]

  @Column({
    name: 'contracts_ids',
    type: 'simple-array',
  })
  contractsIds!: string[]

  @OneToMany(() => Property, property => property.renter)
  @JoinColumn({
    name: 'rent_properties',
  })
  rentProperties!: Property[]

  @Column({
    name: 'rent_properties_ids',
    type: 'simple-array',
  })
  rentPropertiesIds!: string[]

  // @OneToMany(() => Operator)
  // @Column(
  //     {
  //         unique: true,
  //     }
  // )
  // @JoinColumn(
  //     {
  //         name: 'operators',
  //     }
  // )
  // operators!: Operator[]
  @BeforeInsert()
  protected generateId() {
    this.id = ulidGenerator(DOMAIN.renter)
  }
}
