import { Property } from '@entities/property'

export interface IGetPropertyRepository {
  get(id: string): Promise<Property>
}
