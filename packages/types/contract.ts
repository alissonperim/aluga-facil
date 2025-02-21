import { ICustomer, BaseDomain, IFee, IProperty, IRenter } from '.'

export interface IContract extends BaseDomain {
  locators: ICustomer[]
  locatorsIds: string[]
  properties: IProperty[]
  propertiesIds: string[]
  renter: IRenter
  renterId: string
  fees: IFee[]
  feesIds: string[]
  document: string
  startDate: Date
  endDate: Date
  automaticRenewal: boolean
}
