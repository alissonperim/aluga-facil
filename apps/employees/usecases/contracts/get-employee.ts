import { IEmployee } from '@packages/types'

export interface IGetEmployeeUseCase {
  execute(id: string): Promise<IEmployee>
}
