import { IUser } from '@packages/types'

export interface IGetUserUseCase {
  execute(id: string): Promise<IUser>
}
