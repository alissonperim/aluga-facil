import { Address } from '@entities/address'

export interface ICreateLaboratory {
  name: string
  fantasyName: string
  document: string
  address: Address
}
