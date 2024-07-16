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

    @ManyToMany(() => Owner, owner => owner.properties)
    owners!: Owner[]

    @ManyToOne(() => Renter, renter => renter.rentProperties)
    renter!: Renter

    @ManyToOne(() => Contract, contract => contract.properties)
    contract!: Contract

    @Column(
        {
            type: 'double',
        }
    )
    dimension!: number

    @Column(
        {
            type: 'varchar',
            length: 360,
        }
    )
    description!: string

    @Column(
        {
            type: 'double',
            name: 'rental_price'
        }
    )
    rentalPrice!: number

    @Column(
        {
            type: 'enum',
        }
    )
    type!: PropertyType

    @Column(
        {
            type: 'boolean',
            name: 'insurance_required',
        }
    )
    insuranceRequired!: boolean

    @Column(
        {
            type: 'boolean',
            name: 'guarantor_required',
        }
    )
    guarantorRequired!: boolean
}
