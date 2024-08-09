import { BaseDomain, IAddress, IProperty, MaritalStatus } from '.'

export interface IOwner extends BaseDomain {
  propertiesIds: string[]
  properties: IProperty[]
  name: string
  lastName: string
  email: string
  phoneNumber: string
  address: string | IAddress
  document: string
  birthDate: Date
  maritalStatus: MaritalStatus
}
