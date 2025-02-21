import { Column, Entity, JoinColumn, OneToOne, Relation } from 'typeorm'
import { Base } from './base'
import { Address } from './address'

@Entity('laboratory')
export class Laboratory extends Base {
  @Column({
    length: 256,
    type: 'varchar',
  })
  name!: string

  @Column({
    length: 256,
    type: 'varchar',
  })
  fantasyName!: string

  @Column({
    length: 14,
    nullable: true,
    type: 'varchar',
  })
  document!: string

  @Column({
    length: 256,
    nullable: true,
    type: 'varchar',
  })
  addressIs!: string

  @OneToOne(() => Address, address => address.id, { eager: true, cascade: true, nullable: true })
  @JoinColumn()
  address!: Relation<Address>
}
