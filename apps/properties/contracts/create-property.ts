import { Address } from '@entities/address'
import { PropertyType } from '@packages/types'

export interface ICreateProperty {
  address: Address
  ownersIds: string[]
  renterId: string
  type: PropertyType
  dimension?: number
  description?: string
  rentalPrice: number
  insuranceRequired: boolean
  guarantorRequired: boolean
}
