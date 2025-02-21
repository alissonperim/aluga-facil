import { Address } from '@entities/address'

export interface ICreateEmployee {
  name: string
  lastName: string
  phoneNumber: string
  email: string
  birthDate?: Date
  address?: Address
  document: string
  salary?: number
}
