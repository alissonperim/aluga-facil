import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany } from 'typeorm'
import { Base } from './base'
import { User } from './user'
import { Property } from './property'
import { Fee } from './fee'
import { Renter } from './renter'

@Entity('contracts')
export class Contract extends Base {
    @ManyToOne(() => User)
    locators!: User[]

    @OneToMany(() => Property, property => property.contract)
    properties!: Property[]

    @ManyToOne(() => Renter, renter => renter.contracts)
    renter!: Renter

    @ManyToMany(() => Fee, fee => fee.contracts)
    @JoinTable()
    fees!: Fee[]
    
    // Esse campo será o id do documento salvo em um bucket
    @Column(
        {
            type: 'varchar',
            length: 120,
        }
    )
    document!: string

    @Column(
        {
            type: 'date',
            name: 'start_date',
        }
    )
    startDate!: Date

    @Column(
        {
            type: 'date',
            name: 'end_date',
        }
    )
    endDate!: Date

    @Column(
        {
            type: 'boolean',
            name: 'automatic_renewal',
        }
    )
    automaticRenewal!: boolean
}
