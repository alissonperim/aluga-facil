import { Renter } from '@entities/renter'
import { DeepPartial } from 'typeorm'

export interface IUpdateRenterRepository {
    update(id: string, data: DeepPartial<Renter>): Promise<Renter>
}
