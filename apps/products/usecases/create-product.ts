import { inject, injectable } from 'tsyringe'
import { ICreateProductUseCase } from './contracts'
import { ICreateProduct } from '../contracts'
import { IProduct } from '@packages/types/product'
import { productDto } from '../domain/property-dto'
import { ICreateProductRepository } from '@products/repositories/contracts'

@injectable()
export class CreateProductUseCase implements ICreateProductUseCase {
  constructor(
    @inject('CreateProductRepository')
    private readonly repository: ICreateProductRepository,
  ) {}

  async execute(data: ICreateProduct): Promise<IProduct> {
    const product = await this.repository.create(data)

    return productDto(product)
  }
}
