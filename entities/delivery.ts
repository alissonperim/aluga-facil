import { OneToOne, JoinColumn, Column, BeforeInsert } from 'typeorm'
import { Base } from './base'
import { Employee } from './employee'
import { ulidGenerator, DOMAIN } from '@shared/utils'
import { Status } from '@packages/types/delivery'

export class Delivery extends Base {
  @OneToOne(() => Employee, {
    nullable: true,
  })
  @JoinColumn()
  deliverer!: Employee

  @Column({
    type: 'varchar',
    nullable: true,
  })
  delivererId!: string

  @Column({
    type: 'enum',
    enum: Status,
  })
  status!: Status

  @Column({
    type: 'decimal',
    nullable: true,
  })
  change!: number

  @BeforeInsert()
  protected generateId() {
    this.id = ulidGenerator(DOMAIN.delivery)
  }
}
