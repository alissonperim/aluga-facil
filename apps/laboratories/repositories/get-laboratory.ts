import { Repository } from 'typeorm'
import { DataSourceSingleton } from '@infra/datasource-singleton'
import { injectable } from 'tsyringe'
import { IGetLaboratoryRepository } from './contracts'
import { Laboratory } from '@entities/laboratory'

@injectable()
export class GetLaboratoryRepository implements IGetLaboratoryRepository {
  private readonly context: Repository<Laboratory> = DataSourceSingleton.getRepositoy(Laboratory)

  async get(id: string): Promise<Laboratory> {
    return this.context.findOne({ where: { id } })
  }
}
