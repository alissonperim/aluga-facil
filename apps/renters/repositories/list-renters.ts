import { Repository } from 'typeorm'
import { DataSourceSingleton } from '@infra/datasource-singleton'
import { injectable } from 'tsyringe'
import { IListRentersRepository } from './contracts/list-renters'
import { Renter } from '@entities/renter'
import { ListRentersQueryStringParams } from '@renters/handlers/list'
import { filterQuery } from '@shared/utils/query-params-filter-query'

@injectable()
export class ListRentersRepository implements IListRentersRepository {
  private readonly context: Repository<Renter> = DataSourceSingleton.getRepositoy(Renter)
  async list(params: ListRentersQueryStringParams): Promise<Renter[]> {
    const tableAlias = 'renter'
    const qb = this.context.createQueryBuilder(tableAlias)

    filterQuery<ListRentersQueryStringParams, Renter>({
      queryParams: params,
      queryBuilder: qb,
      tableAlias,
    })

    return qb.getMany()
  }
}
