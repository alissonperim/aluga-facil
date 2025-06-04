import { Customer } from '@entities/customer'
import { IListCustomersRepository } from './contracts'
import { Repository } from 'typeorm'
import { DataSourceSingleton } from '@infra/datasource-singleton'
import { injectable } from 'tsyringe'

@injectable()
export class ListCustomersRepository implements IListCustomersRepository {
  private readonly context: Repository<Customer> = DataSourceSingleton.getRepositoy(Customer)
  async list(): Promise<Customer[]> {
    return this.context.find()
  }
}
