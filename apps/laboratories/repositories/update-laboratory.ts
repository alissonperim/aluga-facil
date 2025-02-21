import { DataSourceSingleton } from '@infra/datasource-singleton'
import { DeepPartial, Repository } from 'typeorm'
import { injectable } from 'tsyringe'
import { BadRequestException } from '@shared/exceptions/bad-request-exception'
import { updateDbSetQuery } from '@shared/utils/update-db-set-query'
import { IUpdateLaboratoryRepository } from './contracts'
import { Laboratory } from '@entities/laboratory'
import { ILaboratory } from '@packages/types'

@injectable()
export class UpdateLaboratoryRepository implements IUpdateLaboratoryRepository {
  private readonly context: Repository<Laboratory> = DataSourceSingleton.getRepositoy(Laboratory)

  async update(id: string, data: DeepPartial<ILaboratory>): Promise<Laboratory> {
    const query = updateDbSetQuery<DeepPartial<ILaboratory>>(data)

    const update = await this.context
      .createQueryBuilder()
      .update(Laboratory)
      .set(query)
      .where('id = :id', { id })
      .execute()

    if (update.affected === 0) {
      throw new BadRequestException('Laboratory not found')
    }

    return this.context.findOneOrFail({ where: { id } })
  }
}
