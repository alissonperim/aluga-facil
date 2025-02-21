import { IListCustomersRepository } from '@customers/repositories/contracts'
import { IListCustomersUseCase } from './contracts'
import { ICustomer } from '@packages/types'
import { inject, injectable } from 'tsyringe'
import { listCustomersDto } from '@customers/domain/customer-dto'
import { IListResponse } from '@shared/utils/list-response'

@injectable()
export class ListCustomersUseCase implements IListCustomersUseCase {
  constructor(
    @inject('ListCustomersRepository')
    private readonly listCustomersRepository: IListCustomersRepository,
  ) {}
  async execute(): Promise<IListResponse<ICustomer>> {
    const users = await this.listCustomersRepository.list()

    return listCustomersDto(users)
  }
}
