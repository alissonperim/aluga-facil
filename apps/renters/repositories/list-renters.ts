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
    const queryParams = params
    const { query, values } = filterQuery({ queryParams, tableName: 'renters' })
    console.log(query)

    const renters = await this.context.query(query, values)
    console.log('RENTERSSSSS REPO', renters)

    const rentersParsed: Renter[] = renters.map((renter: Renter) => {
      return toCamelCase(renter)
    })

    console.log('RESULLLLLT', rentersParsed)

    return rentersParsed
  }
}

const toCamelCase = <T>(params: T) => {
  const result = {}
  for (const key in params) {
    const newKey = key.replace(/_([a-z])/g, g => g[1].toUpperCase())
    result[newKey] = params[key]
  }
  return result
}
