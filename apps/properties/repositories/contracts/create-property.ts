import { Property } from '@entities/property'
import { ICreateProperty } from '@properties/contracts/create-property'

export interface ICreatePropertyRepository {
  create(data: ICreateProperty): Promise<Property>
}
