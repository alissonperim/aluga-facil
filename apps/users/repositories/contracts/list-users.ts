import { User } from '@entities/user'

export interface IListUsersRepository {
  list(): Promise<User[]>
}
