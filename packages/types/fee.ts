import { BaseDomain } from './base'

export enum FeeType {
  absolute = 'absolute',
  percentage = 'percentage',
}

export interface IFee extends BaseDomain {
  description: string
  name: string
  amount: number
  type: FeeType
}
