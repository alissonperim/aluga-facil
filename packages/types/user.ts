import { IAddress } from './address'

export enum MaritalStatus {
  SINGLE = 'single',
  MARRIED = 'married',
  DIVORCED = 'divorced',
  WIDOWED = 'widowed',
}

export interface IUser {
  id: string
  name: string
  lastName: string
  phoneNumber: string
  email: string
  document: string
  maritalStatus: MaritalStatus
  address?: IAddress
  birthDate: Date
  createdAt: Date
  updatedAt: Date
  deletedAt?: Date
  createdBy?: string
  updatedBy?: string
  deletedBy?: string
}
