import { Product } from '@entities/product'

export interface IGetProductRepository {
  get(id: string): Promise<Product>
}
