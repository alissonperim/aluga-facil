import { Repository } from 'typeorm'
import { DataSourceSingleton } from '@infra/datasource-singleton'
import { injectable } from 'tsyringe'
import { IGetProductRepository } from './contracts'
import { Product } from '@entities/product'

@injectable()
export class GetProductRepository implements IGetProductRepository {
  private readonly context: Repository<Product> = DataSourceSingleton.getRepositoy(Product)

  async get(id: string): Promise<Product> {
    return this.context.findOne({ where: { id } })
  }
}
