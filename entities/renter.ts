import { Column, Entity } from 'typeorm'
import { PersonalData } from './personal-data'

@Entity('renters')
export class Renter extends PersonalData {
    @Column(
        {
            name: 'document',
            type: 'varchar',
            length: 14,
            unique: true,
        }
    )
    document!: string

    @Column(
        {
            name: 'last_name',
            type: 'varchar',
            length: 120,
            nullable: true,
        }
    )
    lastName!: string

    @Column(
        {
            name: 'is_real_state',
            type: 'boolean',
            default: false,
        }
    )
    isRealState: boolean

    @Column(
        {
            name: 'fantasy_name',
            type: 'varchar',
            length: 120,
            nullable: true,
        }
    )
    fantasyName!: string
    
    @Column(
        {
            name: 'birth_date',
            type: 'date',
            nullable: true,
        }
    )
    birthDate!: Date

    // @OneToMany(() => Contract)
    // @Column(
    //     {
    //         unique: true,
    //     }
    // )
    // @JoinColumn(
    //     {
    //         name: 'contracts',
    //     }
    // )
    // contracts!: Contract[]

    // @OneToMany(() => Property)
    // @Column()
    // @JoinColumn(
    //     {
    //         name: 'properties',
    //     }
    // )
    // properties!: Property[]

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
}
