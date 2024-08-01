import { Repository } from 'typeorm'
import { DataSourceSingleton } from '@infra/datasource-singleton'
import { injectable } from 'tsyringe'
import { filterQuery } from '@shared/utils/query-params-filter-query'
import { IListPropertiesRepository } from './contracts'
import { IListPropertiesQueryStringParams } from '@properties/contracts/list-properties'
import { Property } from '@entities/property'

@injectable()
export class ListPropertiesRepository implements IListPropertiesRepository {
  private readonly context: Repository<Property> = DataSourceSingleton.getRepositoy(Property)
  async list(params: IListPropertiesQueryStringParams): Promise<Property[]> {
    const tableAlias = 'property'
    const qb = this.context.createQueryBuilder(tableAlias)

    filterQuery<IListPropertiesQueryStringParams, Property>({
      queryParams: params,
      queryBuilder: qb,
      tableAlias,
    })

    return qb.getMany()
  }
}
