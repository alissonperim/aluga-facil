import { Employee } from '@entities/employee'
import { IEmployee } from '@packages/types'
import { DeepPartial } from 'typeorm'

export interface IUpdateEmployeeRepository {
  update(id: string, data: DeepPartial<IEmployee>): Promise<Employee>
}
