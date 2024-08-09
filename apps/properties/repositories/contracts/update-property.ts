import { Property } from '@entities/property'
import { IProperty } from '@packages/types'
import { DeepPartial } from 'typeorm'

export interface IUpdatePropertyRepository {
  update(id: string, data: DeepPartial<IProperty>): Promise<Property>
}
