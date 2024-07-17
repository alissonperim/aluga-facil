import { User } from '@entities/user'
import { IListUsersRepository } from './contracts'
import { Repository } from 'typeorm'
import { DataSourceSingleton } from '@infra/datasource-singleton'
import { injectable } from 'tsyringe'

@injectable()
export class ListUsersRepository implements IListUsersRepository {
  private readonly context: Repository<User> = DataSourceSingleton.getRepositoy(User)
  async list(): Promise<User[]> {
    return this.context.find()
  }
}
