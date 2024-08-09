import { Repository } from 'typeorm'
import { injectable } from 'tsyringe'
import { DataSourceSingleton } from '@infra/datasource-singleton'
import { CreateException } from '@shared/exceptions/create-exception'
import { ICreateOwnerRepository } from './contracts'
import { ICreateOwner } from '../contracts'
import { Owner } from '@entities/owner'

@injectable()
export class CreateOwnerRepository implements ICreateOwnerRepository {
  private readonly context: Repository<Owner> = DataSourceSingleton.getRepositoy(Owner)
  async create(data: ICreateOwner): Promise<Owner> {
    const owner = this.context.create(data)

    const ownerExists = await this.context.findOne({
      where: [{ email: owner.email }, { document: owner.document }, { phoneNumber: owner.phoneNumber }],
    })

    if (ownerExists) throw new CreateException('Owner already exists')

    return this.context.save(owner)
  }
}
