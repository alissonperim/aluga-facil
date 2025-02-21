import { IUpdateProductRepository } from '@products/repositories/contracts'
import { inject, injectable } from 'tsyringe'
import { DeepPartial } from 'typeorm'
import { IUpdateProductUseCase } from './contracts'
import { IProduct } from '@packages/types/product'
import { productDto } from '@products/domain/property-dto'

@injectable()
export class UpdateProductUseCase implements IUpdateProductUseCase {
  constructor(
    @inject('UpdateProductRepository')
    private readonly repository: IUpdateProductRepository,
  ) {}

  async execute(id: string, data: DeepPartial<IProduct>): Promise<IProduct> {
    const property = await this.repository.update(id, data)

    return productDto(property)
  }
}
