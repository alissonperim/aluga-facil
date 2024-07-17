import { inject, injectable } from 'tsyringe'
import { IGetUserUseCase } from './contracts'
import { IGetUserRepository } from '@users/repositories/contracts'
import { IUser } from '@packages/types'
import { userDto } from '@users/domain/user-dto'

@injectable()
export class GetUserUseCase implements IGetUserUseCase {
  constructor(
    @inject('GetUserRepository')
    private readonly repository: IGetUserRepository,
  ) {}

  async execute(id: string): Promise<IUser> {
    const user = await this.repository.get(id)

    return userDto(user)
  }
}
