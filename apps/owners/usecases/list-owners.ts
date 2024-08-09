import { IListOwnersUseCase } from './contracts'
import { IOwner } from '@packages/types'
import { inject, injectable } from 'tsyringe'
import { IListResponse } from '@shared/utils/list-response'
import { IListOwnersRepository } from '@owners/repositories/contracts'
import { ListOwnersQueryParams } from '@owners/contracts/list-owners'
import { listOwnersDto } from '@owners/domain/owner-dto'

@injectable()
export class ListOwnersUseCase implements IListOwnersUseCase {
  constructor(
    @inject('ListOwnersRepository')
    private readonly listUsersRepository: IListOwnersRepository,
  ) {}
  async execute(params: ListOwnersQueryParams): Promise<IListResponse<IOwner>> {
    const owners = await this.listUsersRepository.list(params)

    return listOwnersDto(owners)
  }
}
