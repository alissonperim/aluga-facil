import { Repository } from 'typeorm'
import { DataSourceSingleton } from '@infra/datasource-singleton'
import { injectable } from 'tsyringe'
import { IGetEmployeeRepository } from './contracts/get-employee'
import { Employee } from '@entities/employee'

@injectable()
export class GetEmployeeRepository implements IGetEmployeeRepository {
  private readonly context: Repository<Employee> = DataSourceSingleton.getRepositoy(Employee)

  async get(id: string): Promise<Employee> {
    return this.context.findOne({ where: { id } })
  }
}
