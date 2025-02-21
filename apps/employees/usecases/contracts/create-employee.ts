import { ICreateEmployee } from '@employees/contracts'
import { IEmployee } from '@packages/types'

export interface ICreateEmployeeUseCase {
  execute(data: ICreateEmployee): Promise<IEmployee>
}
