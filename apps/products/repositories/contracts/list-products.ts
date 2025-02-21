import { Product } from '@entities/product'
import { IListProductsQueryStringParams } from '@products/contracts/list-products'

export interface IListProductsRepository {
  list(params: IListProductsQueryStringParams): Promise<Product[]>
}
