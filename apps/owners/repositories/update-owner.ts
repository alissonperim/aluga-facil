import { DataSourceSingleton } from '@infra/datasource-singleton'
import { DeepPartial, Repository } from 'typeorm'
import { injectable } from 'tsyringe'
import { IOwner } from '@packages/types'
import { BadRequestException } from '@shared/exceptions/bad-request-exception'
import { IUpdateOwnerRepository } from './contracts'
import { Owner } from '@entities/owner'
import { updateDbSetQuery } from '@shared/utils/update-db-set-query'

@injectable()
export class UpdateOwnerRepository implements IUpdateOwnerRepository {
  private readonly context: Repository<Owner> = DataSourceSingleton.getRepositoy(Owner)

  async update(id: string, data: DeepPartial<IOwner>): Promise<Owner> {
    const query = updateDbSetQuery<DeepPartial<IOwner>>(data)

    const update = await this.context.createQueryBuilder().update(Owner).set(query).where('id = :id', { id }).execute()

    if (update.affected === 0) {
      throw new BadRequestException('Renter not found')
    }

    return this.context.findOneOrFail({ where: { id } })
  }
}
