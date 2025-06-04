import { BaseDomain, IAddress } from '.'

export interface ICompany extends BaseDomain {
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
