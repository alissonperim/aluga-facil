import { Repository } from 'typeorm'
import { injectable } from 'tsyringe'
import { DataSourceSingleton } from '@infra/datasource-singleton'
import { CreateException } from '@shared/exceptions/create-exception'
import { ICreateEmployeeRepository } from './contracts/create-employee'
import { Employee } from '@entities/employee'
import { ICreateEmployee } from '@employees/contracts'

@injectable()
export class CreateEmployeeRepository implements ICreateEmployeeRepository {
  private readonly context: Repository<Employee> = DataSourceSingleton.getRepositoy(Employee)
  async create(data: ICreateEmployee): Promise<Employee> {
    const employee = this.context.create(data)

    const employeeExists = await this.context.findOne({
      where: [
        {
          email: employee.email,
        },
        {
          document: employee.document,
        },
        {
          phoneNumber: employee.phoneNumber,
        },
      ],
    })

    if (employeeExists) {
      throw new CreateException('Renter already exists')
    }

    return this.context.save(employee)
  }
}
