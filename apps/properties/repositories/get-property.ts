import { Repository } from 'typeorm'
import { DataSourceSingleton } from '@infra/datasource-singleton'
import { injectable } from 'tsyringe'
import { IGetPropertyRepository } from './contracts/get-property'
import { Property } from '@entities/property'

@injectable()
export class GetPropertyRepository implements IGetPropertyRepository {
  private readonly context: Repository<Property> = DataSourceSingleton.getRepositoy(Property)

  async get(id: string): Promise<Property> {
    return this.context.findOne({ where: { id } })
  }
}
