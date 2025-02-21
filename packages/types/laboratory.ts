import { BaseDomain, IAddress } from './'

export interface ILaboratory extends BaseDomain {
  name: string
  fantasyName: string
  document: string
  address: IAddress
}
