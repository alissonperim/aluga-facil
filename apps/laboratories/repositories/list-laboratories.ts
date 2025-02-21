import { Repository } from 'typeorm'
import { DataSourceSingleton } from '@infra/datasource-singleton'
import { injectable } from 'tsyringe'
import { filterQuery } from '@shared/utils/query-params-filter-query'
import { IListLaboratoriesRepository } from './contracts'
import { ListLaboratoriesQueryParams } from '@laboratories/contracts'
import { Laboratory } from '@entities/laboratory'

@injectable()
export class ListLaboratoriesRepository implements IListLaboratoriesRepository {
  private readonly context: Repository<Laboratory> = DataSourceSingleton.getRepositoy(Laboratory)
  async list(params: ListLaboratoriesQueryParams): Promise<Laboratory[]> {
    const tableAlias = 'laboratory'
    const qb = this.context.createQueryBuilder(tableAlias)

    filterQuery<ListLaboratoriesQueryParams, Laboratory>({
      queryParams: params,
      queryBuilder: qb,
      tableAlias,
    })

    return qb.getMany()
  }
}
