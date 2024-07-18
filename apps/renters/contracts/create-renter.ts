import { Address } from '@entities/address'

export interface ICreateRenter {
  name?: string
  lastName?: string
  phoneNumber: string
  email: string
  birthDate?: Date
  address: Address
  fantasyName?: string
  document: string
  isRealState?: boolean
}
