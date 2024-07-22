import { IContract, IProperty, IAddress, BaseDomain } from '.'

export interface IRenter extends BaseDomain {
  name?: string
  lastName?: string
  phoneNumber: string
  email: string
  birthDate?: Date
  address?: IAddress
  contracts?: IContract[]
  rentProperties: IProperty[]
  fantasyName?: string
  document: string
  isRealState?: boolean
  addressId?: string
  contractsIds?: string[]
  rentPropertiesIds?: string[]
}
