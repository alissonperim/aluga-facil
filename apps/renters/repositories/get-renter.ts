import { Repository } from 'typeorm'
import { DataSourceSingleton } from '@infra/datasource-singleton'
import { injectable } from 'tsyringe'
import { IGetRenterRepository } from './contracts/get-renter'
import { Renter } from '@entities/renter'

@injectable()
export class GetRenterRepository implements IGetRenterRepository {
    private readonly context: Repository<Renter> = DataSourceSingleton.getRepositoy(Renter)
    
    async get(id: string): Promise<Renter> {
        return this.context.findOne({ where: { id }})
    }
}
