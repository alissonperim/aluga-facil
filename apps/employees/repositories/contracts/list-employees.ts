import { ListEmployeesQueryStringParams } from '@employees/handlers/list'
import { Employee } from '@entities/employee'

export interface IListEmployeesRepository {
  list(params: ListEmployeesQueryStringParams): Promise<Employee[]>
}
