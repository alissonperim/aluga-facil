import { Address } from '@entities/address'
import { MaritalStatus } from '@packages/types'

export interface ICreateOwner {
  name: string
  lastName: string
  phoneNumber: string
  email: string
  document: string
  birthDate: Date
  address?: Address
  propertiesIds?: string[]
  maritalStatus: MaritalStatus
}
