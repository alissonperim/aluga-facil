import { inject, injectable } from 'tsyringe'
import { IGetEmployeeUseCase } from './contracts'
import { IGetEmployeeRepository } from '@employees/repositories/contracts'
import { IEmployee } from '@packages/types'
import { employeeDto } from '@employees/domain/employee-dto'

@injectable()
export class GetEmployeeUseCase implements IGetEmployeeUseCase {
  constructor(
    @inject('GetEmployeeRepository')
    private readonly repository: IGetEmployeeRepository,
  ) {}

  async execute(id: string): Promise<IEmployee> {
    const employee = await this.repository.get(id)

    return employeeDto(employee)
  }
}
