import { Repository } from 'typeorm'
import { injectable } from 'tsyringe'
import { DataSourceSingleton } from '@infra/datasource-singleton'
import { CreateException } from '@shared/exceptions/create-exception'
import { ICreateRenterRepository } from './contracts/create-renter'
import { Renter } from '@entities/renter'
import { ICreateRenter } from '../contracts'

@injectable()
export class CreateRenterRepository implements ICreateRenterRepository {
  private readonly context: Repository<Renter> = DataSourceSingleton.getRepositoy(Renter)
  async create(data: ICreateRenter): Promise<Renter> {
    const renter = this.context.create(data)

    const renterExists = await this.context.findOne({
      where: [
        {
          email: renter.email,
        },
        {
          document: renter.document,
        },
        {
          phoneNumber: renter.phoneNumber,
        },
      ],
    })

    if (renterExists) {
      throw new CreateException('Renter already exists')
    }

    return this.context.save(renter)
  }
}
