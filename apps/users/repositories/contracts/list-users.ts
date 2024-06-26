import { User } from '@users/domain/entity/user'

export interface IListUsersRepository {
    list(): Promise<User[]>
}