import { ICreateEmployee } from '@employees/contracts'
import { Employee } from '@entities/employee'

export interface ICreateEmployeeRepository {
  create(data: ICreateEmployee): Promise<Employee>
}
