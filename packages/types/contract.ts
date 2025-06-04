import { ICustomer, BaseDomain, IFee } from '.'

export interface IContract extends BaseDomain {
  locators: ICustomer[]
  locatorsIds: string[]
  propertiesIds: string[]
  renterId: string
  fees: IFee[]
  feesIds: string[]
  document: string
  startDate: Date
  endDate: Date
  automaticRenewal: boolean
}
