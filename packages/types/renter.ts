import { Contract } from '@entities/contract'
import { IAddress } from './address'
import { BaseDomain } from './base'

export interface IRenter extends BaseDomain {
  name?: string
  lastName?: string
  phoneNumber: string
  email: string
  birthDate?: Date
  address: IAddress
  contracts?: Contract[]
  fantasyName?: string
  document: string
  isRealState?: boolean
}
