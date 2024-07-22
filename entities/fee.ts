import { Column, Entity, ManyToMany } from 'typeorm'
import { Base } from './base'
import { FeeType } from '@packages/types/fee'
import { Contract } from './contract'

@Entity('fees')
export class Fee extends Base {
  @Column({
    type: 'varchar',
    length: 120,
  })
  description!: string

  @Column({
    type: 'varchar',
    length: 120,
  })
  name!: string

  @Column({
    type: 'decimal',
  })
  amount!: number

  @Column({
    type: 'enum',
    enum: FeeType,
  })
  type!: FeeType

  @ManyToMany(() => Contract, contract => contract.fees)
  contracts!: Contract[]

  // @ManyToOne(() => Player, player => player.fees)
  // player!: Player
}
