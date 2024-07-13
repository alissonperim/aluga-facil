import { Column, Entity, ManyToMany, ManyToOne } from 'typeorm'
import { Base } from './base'
import { FeeType } from '@packages/types/fee'
import { Contract } from './contract'
import { Player } from './player'

@Entity('fees')
export class Fee extends Base {
    @Column(
        {
            type: 'varchar',
            length: 120,
        }
    )
    description!: string

    @Column(
        {
            type: 'varchar',
            length: 120,
        }
    )
    name!: string

    @Column(
        {
            type: 'float',
            precision: 5,
            scale: 2,
        }
    )
    amount!: number

    @Column(
        {
            type: 'enum',
            enum: FeeType
        }
    )
    type!: string

    @ManyToMany(() => Contract, contract => contract.fees)
    contracts!: Contract[]

    @ManyToOne(() => Player, player => player.fees)
    player!: Player
}
