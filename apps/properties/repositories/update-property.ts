import { DataSourceSingleton } from '@infra/datasource-singleton'
import { DeepPartial, Repository } from 'typeorm'
import { injectable } from 'tsyringe'
import { BadRequestException } from '@shared/exceptions/bad-request-exception'
import { updateDbSetQuery } from '@shared/utils/update-db-set-query'
import { IUpdatePropertyRepository } from './contracts'
import { Property } from '@entities/property'

@injectable()
export class UpdatePropertyRepository implements IUpdatePropertyRepository {
  private readonly context: Repository<Property> = DataSourceSingleton.getRepositoy(Property)

  async update(id: string, data: DeepPartial<Property>): Promise<Property> {
    const query = updateDbSetQuery<DeepPartial<Property>>(data)

    const update = await this.context
      .createQueryBuilder()
      .update(Property)
      .set(query)
      .where('id = :id', { id })
      .execute()

    if (update.affected === 0) {
      throw new BadRequestException('Property not found')
    }

    return this.context.findOneOrFail({ where: { id } })
  }
}
