import { Column, Entity, JoinColumn, OneToOne } from 'typeorm'
import { Base } from './base'
import { CommissionAmountType, DiscountType, MedicamentListType } from '@packages/types/product'
import { Laboratory } from './laboratory'
import { TerapeuticClass } from './terapeutic-class'

@Entity('products')
export class Product extends Base {
  @Column({
    type: 'varchar',
    length: 256,
  })
  name!: string

  @Column({
    type: 'varchar',
    length: 14,
    unique: true,
  })
  barcode!: string

  @Column({
    type: 'varchar',
    length: 14,
    nullable: true,
    unique: true,
  })
  secondaryBarcode!: string

  @Column({
    length: 8,
    nullable: true,
    unique: true,
    type: 'varchar',
  })
  internalCode!: string

  @Column({
    type: 'decimal',
  })
  salePricePmc!: number

  @Column({
    type: 'decimal',
    nullable: true,
  })
  purchasePrice!: number

  @Column({
    type: 'decimal',
  })
  factoryPrice!: number

  @Column({
    type: 'decimal',
    nullable: true,
  })
  discount!: number

  @Column({
    type: 'enum',
    enum: DiscountType,
    nullable: true,
  })
  discountType!: DiscountType

  @Column({
    type: 'decimal',
    nullable: true,
  })
  commissionAmount!: number

  @Column({
    type: 'enum',
    enum: CommissionAmountType,
    nullable: true,
  })
  commissionType!: CommissionAmountType

  @Column({
    type: 'date',
    nullable: true,
  })
  expireAt!: Date

  @OneToOne(() => Laboratory, lab => lab.id)
  @JoinColumn()
  laboratory!: Laboratory

  @Column({
    type: 'varchar',
  })
  laboratoryId!: string

  @Column({
    type: 'integer',
  })
  stockAmount!: number

  @Column({
    type: 'integer',
    nullable: true,
  })
  minStockAmount!: number

  @Column({
    type: 'integer',
    nullable: true,
  })
  maxStockAmount!: number

  @OneToOne(() => TerapeuticClass, tc => tc.id)
  @JoinColumn()
  terapeuticClass!: TerapeuticClass

  @Column({
    type: 'varchar',
  })
  terapeuticClassId!: string

  @Column({
    type: 'enum',
    enum: MedicamentListType,
    nullable: false,
  })
  medicamentListType!: MedicamentListType

  @Column({
    type: 'decimal',
  })
  icms!: number

  @Column({
    type: 'varchar',
    length: 256,
  })
  medicamentPresentation!: string

  @Column({
    type: 'integer',
  })
  purchaseUnity!: number

  @Column({
    type: 'integer',
  })
  sellerUnity!: number

  @Column({
    type: 'varchar',
    length: 256,
    nullable: true,
  })
  genericName!: string

  @Column({
    type: 'bool',
    nullable: true,
  })
  hasGeneric!: boolean
}
