import { IAddress } from '@packages/types'

export interface ICreateCompany {
  name: string
  fantasyName: string
  email: string
  phoneNumber: string
  document: string
  Address: IAddress | string
  Contracts: any
  Properties: any
  BankAccount: any
  Operators: any
}
