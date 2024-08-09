import { Address } from '@entities/address'

export interface ICreateOwner {
  name: string
  lastName: string
  phoneNumber: string
  email: string
  document: string
  birthDate: Date
  address?: Address
  propertiesIds?: string[]
}
