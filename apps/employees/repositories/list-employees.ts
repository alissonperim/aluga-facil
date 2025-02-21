import { Repository } from 'typeorm'
import { DataSourceSingleton } from '@infra/datasource-singleton'
import { injectable } from 'tsyringe'
import { filterQuery } from '@shared/utils/query-params-filter-query'
import { IListEmployeesRepository } from './contracts'
import { ListEmployeesQueryStringParams } from '@employees/handlers/list'
import { Employee } from '@entities/employee'

@injectable()
export class ListEmployeesRepository implements IListEmployeesRepository {
  private readonly context: Repository<Employee> = DataSourceSingleton.getRepositoy(Employee)
  async list(params: ListEmployeesQueryStringParams): Promise<Employee[]> {
    const tableAlias = 'renter'
    const qb = this.context.createQueryBuilder(tableAlias)

    filterQuery<ListEmployeesQueryStringParams, Employee>({
      queryParams: params,
      queryBuilder: qb,
      tableAlias,
    })

    return qb.getMany()
  }
}
