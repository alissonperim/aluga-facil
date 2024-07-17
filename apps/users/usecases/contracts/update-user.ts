import { IUser } from '@packages/types'
import { DeepPartial } from 'typeorm'

export interface IUpdateUserUseCase {
  execute(id: string, data: DeepPartial<IUser>): Promise<IUser>
}
