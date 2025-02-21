import { IAddress, BaseDomain } from '.'

export enum EmployeeRoleType {
  seller = 'seller',
  deliver = 'deliverer',
  cashier = 'cashier',
  manager = 'manager',
  admin = 'admin',
}

export interface IEmployee extends BaseDomain {
  name: string
  lastName: string
  phoneNumber: string
  email: string
  birthDate?: Date
  address: IAddress
  document: string
  addressId?: string
  role: EmployeeRoleType
}
