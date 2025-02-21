import { CommissionAmountType, DiscountType, MedicamentListType } from '@packages/types/product'

export interface ICreateProduct {
  name: string
  barcode: string
  secondaryBarcode?: string
  internalCode: string
  salePricePmc: number
  purchasePrice: number
  factoryPrice: number
  discount?: number
  discountType?: DiscountType
  commissionAmount?: number
  commissionAmountType?: CommissionAmountType
  expireAt?: Date
  laboratoryId?: string
  stockAmount: number
  minStockAmount?: number
  maxStockAmount?: number
  terapeuticClassId?: string
  medicamentListType?: MedicamentListType
  icms: number
  medicamentPresentation: string
  purchaseUnity: number
  sellerUnity: number
  genericName?: string
  hasGeneric?: boolean
}
