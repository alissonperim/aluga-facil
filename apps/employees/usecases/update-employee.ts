import { inject, injectable } from 'tsyringe'
import { DeepPartial } from 'typeorm'
import { IUpdateEmployeeUseCase } from './contracts/update-employee'
import { IUpdateEmployeeRepository } from '@employees/repositories/contracts'
import { IEmployee } from '@packages/types'
import { employeeDto } from '@employees/domain/employee-dto'

@injectable()
export class UpdateEmployeeUseCase implements IUpdateEmployeeUseCase {
  constructor(
    @inject('UpdateEmployeeRepository')
    private readonly repository: IUpdateEmployeeRepository,
  ) {}

  async execute(id: string, data: DeepPartial<IEmployee>): Promise<IEmployee> {
    const employee = await this.repository.update(id, data)

    return employeeDto(employee)
  }
}
