import { BeforeInsert, Column, Entity, JoinColumn, OneToOne } from 'typeorm'
import { Base } from './base'
import { Customer } from './customer'
import { PaymentType, SaleType } from '@packages/types/sale'
import { Employee } from './employee'
import { DOMAIN, ulidGenerator } from '@shared/utils'
import { Delivery } from './delivery'

@Entity('sales')
export class Sale extends Base {
  @Column({
    type: 'integer',
    nullable: false,
    unique: true,
  })
  code!: number

  @OneToOne(() => Customer, {
    nullable: true,
  })
  @JoinColumn()
  customer!: string

  @Column({
    type: 'varchar',
    nullable: true,
  })
  readonly customerId!: string

  @Column({
    type: 'varchar',
    nullable: true,
  })
  customerDocument!: string

  @OneToOne(() => Delivery, {
    nullable: true,
    eager: true,
    cascade: ['insert'],
  })
  @JoinColumn()
  delivery!: Delivery

  @Column({
    type: 'varchar',
    nullable: true,
  })
  deliveryId!: string

  @Column({
    type: 'enum',
    enum: SaleType,
  })
  saleType!: SaleType

  @Column({
    type: 'enum',
    enum: PaymentType,
  })
  paymentType!: PaymentType

  @OneToOne(() => Employee, {
    nullable: false,
  })
  @JoinColumn()
  seller!: string

  @Column({
    type: 'varchar',
    nullable: false,
  })
  readonly sellerId!: string

  @Column({
    type: 'decimal',
    nullable: false,
  })
  amount!: number

  @Column({
    type: 'decimal',
    nullable: true,
  })
  additionalDiscount!: number

  @BeforeInsert()
  protected generateId() {
    this.id = ulidGenerator(DOMAIN.sale)
  }
}
