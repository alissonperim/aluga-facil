import { DataSourceSingleton } from '@infra/datasource-singleton'
import { DeepPartial, Repository } from 'typeorm'
import { injectable } from 'tsyringe'
import { BadRequestException } from '@shared/exceptions/bad-request-exception'
import { updateDbSetQuery } from '@shared/utils/update-db-set-query'
import { IUpdateEmployeeRepository } from './contracts'
import { Employee } from '@entities/employee'
import { IEmployee } from '@packages/types'

@injectable()
export class UpdateEmployeeRepository implements IUpdateEmployeeRepository {
  private readonly context: Repository<Employee> = DataSourceSingleton.getRepositoy(Employee)

  async update(id: string, data: DeepPartial<IEmployee>): Promise<Employee> {
    const query = updateDbSetQuery<DeepPartial<IEmployee>>(data)

    const update = await this.context
      .createQueryBuilder()
      .update(Employee)
      .set(query)
      .where('id = :id', { id })
      .execute()

    if (update.affected === 0) {
      throw new BadRequestException('Employee not found')
    }

    return this.context.findOneOrFail({ where: { id } })
  }
}
