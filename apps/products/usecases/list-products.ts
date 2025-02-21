import { inject, injectable } from 'tsyringe'
import { IListResponse } from '@shared/utils/list-response'
import { IListProductsUseCase } from './contracts'
import { IListProductsRepository } from '@products/repositories/contracts'
import { IListProductsQueryStringParams } from '@products/contracts/list-products'
import { productDto } from '@products/domain/property-dto'
import { IProduct } from '@packages/types/product'

@injectable()
export class ListProductsUseCase implements IListProductsUseCase {
  constructor(
    @inject('ListProductsRepository')
    private readonly repository: IListProductsRepository,
  ) {}
  async execute(params: IListProductsQueryStringParams): Promise<IListResponse<IProduct>> {
    const products = await this.repository.list(params)

    return {
      data: products.map(productDto),
    }
  }
}
