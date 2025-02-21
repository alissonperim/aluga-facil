import { Repository } from 'typeorm'
import { injectable } from 'tsyringe'
import { DataSourceSingleton } from '@infra/datasource-singleton'
import { ICreateProductRepository } from './contracts'
import { Product } from '@entities/product'
import { ICreateProduct } from '@products/contracts'

@injectable()
export class CreateProductRepository implements ICreateProductRepository {
  private readonly context: Repository<Product> = DataSourceSingleton.getRepositoy(Product)
  async create(data: ICreateProduct): Promise<Product> {
    const product = this.context.create(data)

    return this.context.save(product)
  }
}
