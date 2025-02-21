import { Company } from '@entities/company'
import { IAddress } from './address'
import { BaseDomain } from './base'

export enum MaritalStatus {
  SINGLE = 'single',
  MARRIED = 'married',
  DIVORCED = 'divorced',
  WIDOWED = 'widowed',
}

export interface ICustomer extends BaseDomain {
  name: string
  lastName?: string
  phoneNumber?: string
  email?: string
  document?: string
  maritalStatus?: MaritalStatus
  company?: Company
  companyId?: string
  address?: IAddress
  birthDate?: Date
}
