import { Repository } from 'typeorm'
import { DataSourceSingleton } from '@infra/datasource-singleton'
import { User } from '@entities/user'
import { injectable } from 'tsyringe'
import { IGetUserRepository } from './contracts'

@injectable()
export class GetUserRepository implements IGetUserRepository {
  private readonly context: Repository<User> = DataSourceSingleton.getRepositoy(User)

  async get(id: string): Promise<User> {
    return this.context.findOne({ where: { id } })
  }
}
