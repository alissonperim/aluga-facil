import { inject, injectable } from 'tsyringe'
import { ICreateEmployeeUseCase } from './contracts/create-employee'
import { ICreateEmployee } from '@employees/contracts'
import { IEmployee } from '@packages/types'
import { ICreateEmployeeRepository } from '@employees/repositories/contracts'
import { employeeDto } from '@employees/domain/employee-dto'

@injectable()
export class CreateEmployeeUseCase implements ICreateEmployeeUseCase {
  constructor(
    @inject('CreateEmployeeRepository')
    private readonly repository: ICreateEmployeeRepository,
  ) {}

  async execute(data: ICreateEmployee): Promise<IEmployee> {
    const employee = await this.repository.create(data)

    return employeeDto(employee)
  }
}
