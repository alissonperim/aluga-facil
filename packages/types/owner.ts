import { BaseDomain, IProperty } from '.'

export interface IOwner extends BaseDomain {
  propertiesIds: string[]
  properties: IProperty[]
}
