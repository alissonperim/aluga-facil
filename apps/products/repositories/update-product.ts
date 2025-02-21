import { DataSourceSingleton } from '@infra/datasource-singleton'
import { DeepPartial, Repository } from 'typeorm'
import { injectable } from 'tsyringe'
import { BadRequestException } from '@shared/exceptions/bad-request-exception'
import { updateDbSetQuery } from '@shared/utils/update-db-set-query'
import { IUpdateProductRepository } from './contracts'
import { Product } from '@entities/product'

@injectable()
export class UpdateProductRepository implements IUpdateProductRepository {
  private readonly context: Repository<Product> = DataSourceSingleton.getRepositoy(Product)

  async update(id: string, data: DeepPartial<Product>): Promise<Product> {
    const query = updateDbSetQuery<DeepPartial<Product>>(data)

    const update = await this.context
      .createQueryBuilder()
      .update(Product)
      .set(query)
      .where('id = :id', { id })
      .execute()

    if (update.affected === 0) {
      throw new BadRequestException('Product not found')
    }

    return this.context.findOneOrFail({ where: { id } })
  }
}
