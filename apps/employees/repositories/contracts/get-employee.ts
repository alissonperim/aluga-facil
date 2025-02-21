import { Employee } from '@entities/employee'

export interface IGetEmployeeRepository {
  get(id: string): Promise<Employee>
}
