import { IAddress, BaseDomain, IContract, IOwner, IRenter } from '.'

export enum PropertyType {
  casa_germinada = 'casa germinada',
  sobrado = 'sobrado',
  bangalo = 'bangalô',
  edicula = 'edícula',
  apartamento = 'apartamento',
  kitnet = 'kitnet',
  flat = 'flat',
  loft = 'loft',
  studio = 'studio',
}

export interface IProperty extends BaseDomain {
  address: IAddress
  addressId: string
  owners: IOwner[]
  ownersIds: string[]
  renter: IRenter
  renterId: string
  contract: IContract
  contractId: string
  dimension: number
  description: string
  rentalPrice: number
  type: PropertyType
  insuranceRequired: boolean
  guarantorRequired: boolean
}
