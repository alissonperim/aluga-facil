import { Product } from '@entities/product'
import { IProduct } from '@packages/types/product'
import { DeepPartial } from 'typeorm'

export interface IUpdateProductRepository {
  update(id: string, data: DeepPartial<IProduct>): Promise<Product>
}
