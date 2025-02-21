import { IEmployee } from '@packages/types'
import { DeepPartial } from 'typeorm'

export interface IUpdateEmployeeUseCase {
  execute(id: string, data: DeepPartial<IEmployee>): Promise<IEmployee>
}
