import { inject, injectable } from 'tsyringe'
import { IGetProductUseCase } from './contracts'
import { IGetProductRepository } from '@products/repositories/contracts'
import { IProduct } from '@packages/types/product'
import { productDto } from '@products/domain/property-dto'

@injectable()
export class GetProductUseCase implements IGetProductUseCase {
  constructor(
    @inject('GetProductRepository')
    private readonly repository: IGetProductRepository,
  ) {}

  async execute(id: string): Promise<IProduct> {
    const product = await this.repository.get(id)

    return productDto(product)
  }
}
