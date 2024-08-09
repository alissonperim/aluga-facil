import { IUser } from '@packages/types'
import { ICreateUser } from '@users/contracts'

export interface ICreateUserUseCase {
  execute(data: ICreateUser): Promise<IUser>
}
