import { Property } from '@entities/property'
import { DeepPartial } from 'typeorm'

export interface IUpdatePropertyRepository {
  update(id: string, data: DeepPartial<Property>): Promise<Property>
}
