import { Repository } from 'typeorm'
import { DataSourceSingleton } from '@infra/datasource-singleton'
import { Customer } from '@entities/customer'
import { injectable } from 'tsyringe'
import { IGetCustomerRepository } from './contracts'

@injectable()
export class GetCustomerRepository implements IGetCustomerRepository {
  private readonly context: Repository<Customer> = DataSourceSingleton.getRepositoy(Customer)

  async get(id: string): Promise<Customer> {
    return this.context.findOne({ where: { id } })
  }
}
