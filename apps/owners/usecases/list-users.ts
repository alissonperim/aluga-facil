import { IListUsersRepository } from '@users/repositories/contracts'
import { IListUsersUseCase } from './contracts'
import { IUser } from '@packages/types'
import { inject, injectable } from 'tsyringe'
import { listUsersDto } from '@users/domain/user-dto'
import { IListResponse } from '@shared/utils/list-response'

@injectable()
export class ListUsersUseCase implements IListUsersUseCase {
  constructor(
    @inject('ListUsersRepository')
    private readonly listUsersRepository: IListUsersRepository,
  ) {}
  async execute(): Promise<IListResponse<IUser>> {
    const users = await this.listUsersRepository.list()

    return listUsersDto(users)
  }
}
