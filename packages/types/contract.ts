import { IUser, BaseDomain, IFee, IProperty } from '.'

export interface IContract extends BaseDomain {
  locators?: IUser[]
  properties?: IProperty[]
  fees: IFee[]
  document: string
  startDate: Date
  endDate: Date
  automaticRenewal: boolean
}
