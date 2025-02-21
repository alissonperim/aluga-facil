import { Laboratory } from '@entities/laboratory'
import { BaseDomain } from './base'
import { TerapeuticClass } from '@entities/terapeutic-class'

/**
 * Comissão do tipo relativa deve ser registrada em porcentagem e static deve ser registrado em valor inteiro
 * A comissão relativa será calculada seu valor em cima do medicamento, a comissão estática terá seu valor inteiro já em cima do valor do medicamento
 */
export enum CommissionAmountType {
  relative = 'relative',
  static = 'static',
}

/**
 * Desconto do tipo relativa deve ser registrada em porcentagem e static deve ser registrado em valor inteiro
 * O desconto relativo será calculada seu valor em cima do valor medicamento, o desconto estático terá seu valor inteiro abatido do valor do medicamento
 */
export enum DiscountType {
  relative = 'relative',
  static = 'static',
}

export enum MedicamentListType {
  positive = 'positive',
  negative = 'negative',
  neutral = 'neutral',
}

export interface IProduct extends BaseDomain {
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
  commissionType?: CommissionAmountType
  expireAt?: Date
  laboratory: Laboratory
  laboratoryId: string
  stockAmount: number
  minStockAmount?: number
  maxStockAmount?: number
  terapeuticClass?: TerapeuticClass
  terapeuticClassId?: string
  medicamentListType?: MedicamentListType
  icms: number
  medicamentPresentation: string
  purchaseUnity: number
  sellerUnity: number
  genericName?: string
  hasGeneric?: boolean
}
