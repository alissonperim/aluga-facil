import { Product } from '@entities/product'
import { ICreateProduct } from '@products/contracts'

export interface ICreateProductRepository {
  create(data: ICreateProduct): Promise<Product>
}
