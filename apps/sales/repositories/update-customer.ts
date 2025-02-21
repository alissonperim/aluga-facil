import { Customer } from '@entities/customer'
import { IUpdateCustomerRepository } from './contracts'
import { DataSourceSingleton } from '@infra/datasource-singleton'
import { DeepPartial, Repository } from 'typeorm'
import { injectable } from 'tsyringe'
import { ICustomer } from '@packages/types'
import { BadRequestException } from '@shared/exceptions/bad-request-exception'

@injectable()
export class UpdateCustomerRepository implements IUpdateCustomerRepository {
  private readonly context: Repository<Customer> = DataSourceSingleton.getRepositoy(Customer)

  async update(id: string, data: DeepPartial<ICustomer>): Promise<Customer> {
    const { name, lastName, maritalStatus, address, birthDate } = data
    const update = await this.context
      .createQueryBuilder()
      .update(Customer)
      .set({
        name: name,
        lastName: lastName,
        maritalStatus: maritalStatus,
        address: address,
        birthDate: birthDate,
      })
      .where('id = :id', { id })
      .execute()

    if (update.affected === 0) throw new BadRequestException('Customer not found')

    return this.context.findOneOrFail({ where: { id } })
  }
}
