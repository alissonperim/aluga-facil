import { IProduct } from '@packages/types/product'

export interface IGetProductUseCase {
  execute(id: string): Promise<IProduct>
}
