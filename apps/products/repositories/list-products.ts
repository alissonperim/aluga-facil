import { Repository } from 'typeorm'
import { DataSourceSingleton } from '@infra/datasource-singleton'
import { injectable } from 'tsyringe'
import { filterQuery } from '@shared/utils/query-params-filter-query'
import { IListProductsRepository } from './contracts'
import { Product } from '@entities/product'
import { IListProductsQueryStringParams } from '@products/contracts/list-products'

@injectable()
export class ListProductsRepository implements IListProductsRepository {
  private readonly context: Repository<Product> = DataSourceSingleton.getRepositoy(Product)
  async list(params: IListProductsQueryStringParams): Promise<Product[]> {
    const tableAlias = 'products'
    const qb = this.context.createQueryBuilder(tableAlias)

    filterQuery<IListProductsQueryStringParams, Product>({
      queryParams: params,
      queryBuilder: qb,
      tableAlias,
    })

    return qb.getMany()
  }
}
