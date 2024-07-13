import { Column, Entity, JoinTable, ManyToMany, ManyToOne } from 'typeorm'
import { Base } from './base'
import { User } from './user'
import { Property } from './property'
import { Fee } from './fee'
import { Renter } from './renter'
import { Owner } from './owner'

@Entity('contracts')
export class Contract extends Base {
    @ManyToMany(() => User)
    @JoinTable()
    users!: User[]

    @ManyToMany(() => Owner, owner => owner.properties)
    @JoinTable()
    owners!: Owner[]

    @ManyToMany(() => Property)
    @JoinTable()
    properties!: Property[]

    @ManyToMany(() => Fee, fee => fee.contracts)
    @JoinTable()
    fees!: Fee[]
    
    @ManyToOne(() => Renter, renter => renter.contracts)
    renter!: Renter

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
