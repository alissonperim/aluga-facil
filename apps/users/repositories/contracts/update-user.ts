import { User } from '@entities/user'
import { DeepPartial } from 'typeorm'

export interface IUpdateUserRepository {
  update(id: string, data: DeepPartial<User>): Promise<User>
}
