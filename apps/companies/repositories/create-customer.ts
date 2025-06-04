import { ICreateCustomer } from '@customers/contracts'
import { Customer } from '@entities/customer'
import { Repository } from 'typeorm'
import { ICreateCustomerRepository } from './contracts'
import { injectable } from 'tsyringe'
import { DataSourceSingleton } from '@infra/datasource-singleton'
import { CreateException } from '@shared/exceptions/create-exception'

@injectable()
export class CreateCustomerRepository implements ICreateCustomerRepository {
  private readonly context: Repository<Customer> = DataSourceSingleton.getRepositoy(Customer)
  async create({ active, name, address, birthDate, email, lastName, phoneNumber }: ICreateCustomer): Promise<Customer> {
    const user = this.context.create({ active, name, address, birthDate, email, lastName, phoneNumber })

    const userExists = await this.context.findOne({
      where: [{ email: user.email }, { document: user.document }, { phoneNumber: user.phoneNumber }],
    })

    if (userExists) throw new CreateException('Customer already exists')

    return this.context.save(user)
  }
}
