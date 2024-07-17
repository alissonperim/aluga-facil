import { Repository } from 'typeorm'
import { DataSourceSingleton } from '@infra/datasource-singleton'
import { injectable } from 'tsyringe'
import { IListRentersRepository } from './contracts/list-renters'
import { Renter } from '@entities/renter'

@injectable()
export class ListRentersRepository implements IListRentersRepository {
  private readonly context: Repository<Renter> = DataSourceSingleton.getRepositoy(Renter)
  async list(): Promise<Renter[]> {
    return this.context.find()
  }
}
