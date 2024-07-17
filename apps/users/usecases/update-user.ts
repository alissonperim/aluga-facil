import { IUpdateUserRepository } from '@users/repositories/contracts'
import { IUpdateUserUseCase } from './contracts'
import { inject, injectable } from 'tsyringe'
import { IUser } from '@packages/types'
import { DeepPartial } from 'typeorm'
import { userDto } from '@users/domain/user-dto'

@injectable()
export class UpdateUserUseCase implements IUpdateUserUseCase {
  constructor(
    @inject('UpdateUserRepository')
    private readonly repository: IUpdateUserRepository,
  ) {}

  async execute(id: string, data: DeepPartial<IUser>): Promise<IUser> {
    const user = await this.repository.update(id, data)

    return userDto(user)
  }
}
