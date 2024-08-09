import { Repository } from 'typeorm'
import { DataSourceSingleton } from '@infra/datasource-singleton'
import { injectable } from 'tsyringe'
import { IGetOwnerRepository } from './contracts'
import { Owner } from '@entities/owner'

@injectable()
export class GetOwnerRepository implements IGetOwnerRepository {
  private readonly context: Repository<Owner> = DataSourceSingleton.getRepositoy(Owner)

  async get(id: string): Promise<Owner> {
    return this.context.findOne({ where: { id } })
  }
}
