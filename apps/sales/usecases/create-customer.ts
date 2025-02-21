import { ICreateCustomer } from '@customers/contracts'
import { ICreateCustomerRepository } from '@customers/repositories/contracts'
import { inject, injectable } from 'tsyringe'
import { ICreateCustomerUseCase } from './contracts/create-customer'
import { ICustomer } from '@packages/types'
import { customerDto } from '@customers/domain/customer-dto'

@injectable()
export class CreateCustomerUseCase implements ICreateCustomerUseCase {
  constructor(
    @inject('CreateCustomerRepository')
    private readonly repository: ICreateCustomerRepository,
  ) {}

  async execute(data: ICreateCustomer): Promise<ICustomer> {
    const customer = await this.repository.create(data)

    return customerDto(customer)
  }
}
