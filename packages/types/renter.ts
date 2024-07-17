import { IAddress } from './address'
import { BaseDomain } from './base'

export interface IRenter extends BaseDomain {
  name: string
  lastName?: string
  phoneNumber: string
  email: string
  birthDate: Date
  address?: IAddress
  fantasyName?: string
  document: string
  isRealState?: boolean
}
