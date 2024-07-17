import { ICreateUser } from '@users/contracts'
import { User } from '@entities/user'
import { Repository } from 'typeorm'
import { ICreateUserRepository } from './contracts'
import { injectable } from 'tsyringe'
import { DataSourceSingleton } from '@infra/datasource-singleton'
import { CreateException } from '@shared/exceptions/create-exception'

@injectable()
export class CreateUserRepository implements ICreateUserRepository {
  private readonly context: Repository<User> = DataSourceSingleton.getRepositoy(User)
  async create(data: ICreateUser): Promise<User> {
    const user = this.context.create(data)

    const userExists = await this.context.findOne({
      where: [{ email: user.email }, { document: user.document }, { phoneNumber: user.phoneNumber }],
    })

    if (userExists) throw new CreateException('User already exists')

    return this.context.save(user)
  }
}
