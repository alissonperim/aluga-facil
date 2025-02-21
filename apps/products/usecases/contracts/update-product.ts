import { Product } from '@entities/product'
import { IProduct } from '@packages/types/product'
import { DeepPartial } from 'typeorm'

export interface IUpdateProductUseCase {
  execute(id: string, data: DeepPartial<Product>): Promise<IProduct>
}
