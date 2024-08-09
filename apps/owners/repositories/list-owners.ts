import { IListOwnersRepository } from './contracts'
import { Repository } from 'typeorm'
import { DataSourceSingleton } from '@infra/datasource-singleton'
import { injectable } from 'tsyringe'
import { Owner } from '@entities/owner'
import { filterQuery } from '@shared/utils/query-params-filter-query'
import { ListOwnersQueryParams } from '../contracts/list-owners'

@injectable()
export class ListOwnersRepository implements IListOwnersRepository {
  private readonly context: Repository<Owner> = DataSourceSingleton.getRepositoy(Owner)
  async list(params: ListOwnersQueryParams): Promise<Owner[]> {
    const tableAlias = 'renter'
    const qb = this.context.createQueryBuilder(tableAlias)

    filterQuery<ListOwnersQueryParams, Owner>({
      queryParams: params,
      queryBuilder: qb,
      tableAlias,
    })

    return qb.getMany()
  }
}
