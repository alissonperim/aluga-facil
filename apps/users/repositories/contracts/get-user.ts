import { User } from '@entities/user'

export interface IGetUserRepository {
  get(id: string): Promise<User>
}
