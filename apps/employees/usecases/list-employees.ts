import { inject, injectable } from 'tsyringe'
import { IListResponse } from '@shared/utils/list-response'
import { IListEmployeesUseCase } from './contracts'
import { ListEmployeesQueryStringParams } from '@employees/handlers/list'
import { IListEmployeesRepository } from '@employees/repositories/contracts'
import { IEmployee } from '@packages/types'
import { employeeDto } from '@employees/domain/employee-dto'

@injectable()
export class ListEmployeesUseCase implements IListEmployeesUseCase {
  constructor(
    @inject('ListEmployeesRepository')
    private readonly repository: IListEmployeesRepository,
  ) {}
  async execute(params: ListEmployeesQueryStringParams): Promise<IListResponse<IEmployee>> {
    const employees = await this.repository.list(params)

    return {
      data: employees.map(employeeDto),
    }
  }
}
