import { User } from '@entities/user'
import { DataSourceSingleton } from '@infra/datasource-singleton'
import { DeepPartial, Repository } from 'typeorm'
import { injectable } from 'tsyringe'
import { BadRequestException } from '@shared/exceptions/bad-request-exception'
import { Renter } from '@entities/renter'
import { IUpdateRenterRepository } from './contracts/update-renter'
import { updateDbSetQuery } from '@shared/utils/update-db-set-query'
import { IRenter } from '@packages/types/renter'

@injectable()
export class UpdateRenterRepository implements IUpdateRenterRepository {
  private readonly context: Repository<Renter> = DataSourceSingleton.getRepositoy(Renter)

  async update(id: string, data: DeepPartial<IRenter>): Promise<Renter> {
    const query = updateDbSetQuery<DeepPartial<IRenter>>(data)

    const update = await this.context.createQueryBuilder().update(User).set(query).where('id = :id', { id }).execute()

    if (update.affected === 0) throw new BadRequestException('Renter not found')

    return this.context.findOneOrFail({ where: { id } })
  }
}
