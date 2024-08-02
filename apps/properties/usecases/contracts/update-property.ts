import { Property } from '@entities/property'
import { IProperty } from '@packages/types'
import { DeepPartial } from 'typeorm'

export interface IUpdatePropertyUseCase {
  execute(id: string, data: DeepPartial<Property>): Promise<IProperty>
}
