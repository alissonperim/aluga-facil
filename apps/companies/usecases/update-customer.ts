import { IUpdateCustomerRepository } from '@customers/repositories/contracts'
import { IUpdateCustomerUseCase } from './contracts'
import { inject, injectable } from 'tsyringe'
import { ICustomer } from '@packages/types'
import { DeepPartial } from 'typeorm'
import { customerDto } from '@customers/domain/customer-dto'

@injectable()
export class UpdateCustomerUseCase implements IUpdateCustomerUseCase {
  constructor(
    @inject('UpdateCustomerRepository')
    private readonly repository: IUpdateCustomerRepository,
  ) {}

  async execute(id: string, data: DeepPartial<ICustomer>): Promise<ICustomer> {
    const user = await this.repository.update(id, data)

    return customerDto(user)
  }
}
