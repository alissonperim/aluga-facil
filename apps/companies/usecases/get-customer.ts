import { inject, injectable } from 'tsyringe'
import { IGetCustomerUseCase } from './contracts'
import { IGetCustomerRepository } from '@customers/repositories/contracts'
import { ICustomer } from '@packages/types'
import { customerDto } from '@customers/domain/customer-dto'

@injectable()
export class GetCustomerUseCase implements IGetCustomerUseCase {
  constructor(
    @inject('GetCustomerRepository')
    private readonly repository: IGetCustomerRepository,
  ) {}

  async execute(id: string): Promise<ICustomer> {
    const user = await this.repository.get(id)

    return customerDto(user)
  }
}
