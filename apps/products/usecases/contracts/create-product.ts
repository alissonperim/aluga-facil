import { IProduct } from '@packages/types/product'
import { ICreateProduct } from '@products/contracts'

export interface ICreateProductUseCase {
  execute(data: ICreateProduct): Promise<IProduct>
}
