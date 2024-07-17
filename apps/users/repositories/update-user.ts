import { User } from '@entities/user'
import { IUpdateUserRepository } from './contracts'
import { DataSourceSingleton } from '@infra/datasource-singleton'
import { DeepPartial, Repository } from 'typeorm'
import { injectable } from 'tsyringe'
import { IUser } from '@packages/types'
import { BadRequestException } from '@shared/exceptions/bad-request-exception'

@injectable()
export class UpdateUserRepository implements IUpdateUserRepository {
  private readonly context: Repository<User> = DataSourceSingleton.getRepositoy(User)

  async update(id: string, data: DeepPartial<IUser>): Promise<User> {
    const { name, lastName, maritalStatus, address, birthDate } = data
    const update = await this.context
      .createQueryBuilder()
      .update(User)
      .set({
        name: name,
        lastName: lastName,
        maritalStatus: maritalStatus,
        address: address,
        birthDate: birthDate,
      })
      .where('id = :id', { id })
      .execute()

    if (update.affected === 0) throw new BadRequestException('User not found')

    return this.context.findOneOrFail({ where: { id } })
  }
}
