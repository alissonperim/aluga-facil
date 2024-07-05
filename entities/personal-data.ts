import { Column, Index, JoinColumn, OneToOne, Relation } from 'typeorm'
import { Base } from './base'
import { Address } from './address'

export class PersonalData extends Base {
    @Column(
        {
            type: 'varchar',
            length: 120,
        }
    )
    name!: string

    @Column(
        {
            name: 'last_name',
            type: 'varchar',
            length: 120,
        }
    )
    lastName!: string

    @Index(
        {
            unique: true
        }
    )
    @Column(
        {
            name: 'phone_number',
            type: 'varchar',
            length: 14,
            unique: true,
        }
    )
    phoneNumber!: string

    @Index(
        {
            unique: true
        }
    )
    @Column(
        {
            name: 'email',
            type: 'varchar',
            length: 120,
            unique: true,
        },
    )
    email!: string

    @Index(
        {
            unique: true
        }
    )
    @Column(
        {
            type: 'varchar',
            length: 11,
            unique: true,
        }
    )
    protected document!: string


    @Column(
        {
            name: 'birth_date',
            type: 'date',
            nullable: true,
        }
    )
    birthDate!: Date

    @OneToOne(() => Address, { eager: true, nullable: true, cascade: true, onUpdate: 'CASCADE' })
    @JoinColumn()
    address?: Relation<Address>
}
