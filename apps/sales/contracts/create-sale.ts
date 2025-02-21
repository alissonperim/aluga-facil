import { IAddress } from '@packages/types'

export interface ICreateCustomer {
  name: string
  lastName?: string
  phoneNumber?: string
  email?: string
  birthDate?: Date
  address?: IAddress
  active: boolean
}
