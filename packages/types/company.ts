import { BaseDomain, IAddress, ICustomer } from '.'

export interface ICompany extends BaseDomain {
  usersIds: string[]
  users: ICustomer[]
  name: string
  lastName: string
  email: string
  phoneNumber: string
  address: string | IAddress
  document: string
  birthDate: Date
}
