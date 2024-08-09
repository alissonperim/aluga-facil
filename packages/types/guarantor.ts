import { Base } from '@entities/base'
import { IAddress } from './address'

export interface IGuarantor extends Base {
  name?: string
  lastName?: string
  phoneNumber: string
  email: string
  birthDate?: Date
  address?: IAddress
  document: string
  addressId?: string
}
