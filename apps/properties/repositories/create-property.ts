import { Repository } from 'typeorm'
import { injectable } from 'tsyringe'
import { DataSourceSingleton } from '@infra/datasource-singleton'
import { ICreatePropertyRepository } from './contracts'
import { Property } from '@entities/property'
import { ICreateProperty } from '@properties/contracts/create-property'

@injectable()
export class CreatePropertyRepository implements ICreatePropertyRepository {
  private readonly context: Repository<Property> = DataSourceSingleton.getRepositoy(Property)
  async create(data: ICreateProperty): Promise<Property> {
    const property = this.context.create(data)

    return this.context.save(property)
  }
}
