import { Column, Entity, ManyToMany, ManyToOne, OneToOne } from 'typeorm'
import { Base } from './base'
import { Address } from './address'
import { PropertyType } from '@packages/types/property'
import { Owner } from './owner'
import { Renter } from './renter'
import { Contract } from './contract'

@Entity('properties')
export class Property extends Base {
  @OneToOne(() => Address, { eager: true, cascade: true })
  address!: Address

  @Column({
    type: 'varchar',
    length: 31,
  })
  addressId!: string

  @ManyToMany(() => Owner, owner => owner.properties)
  owners!: Owner[]

  @Column({
    type: 'simple-array',
    name: 'owners_ids',
  })
  ownersIds!: string[]

  @ManyToOne(() => Renter, renter => renter.rentProperties)
  renter!: Renter

  @Column({
    type: 'varchar',
    length: 31,
  })
  renterId!: string

  @ManyToOne(() => Contract, contract => contract.properties)
  contract!: Contract

  @Column({
    type: 'varchar',
    length: 31,
  })
  contractId!: string

  @Column({
    type: 'decimal',
    nullable: true,
  })
  dimension!: number

  @Column({
    type: 'varchar',
    length: 360,
    nullable: true,
  })
  description!: string

  @Column({
    type: 'decimal',
    name: 'rental_price',
  })
  rentalPrice!: number

  @Column({
    type: 'enum',
    enum: PropertyType,
  })
  type!: PropertyType

  @Column({
    type: 'boolean',
    name: 'insurance_required',
  })
  insuranceRequired!: boolean

  @Column({
    type: 'boolean',
    name: 'guarantor_required',
  })
  guarantorRequired!: boolean
}
