import { Renter } from '@entities/renter'

export interface IGetRenterRepository {
    get(id: string): Promise<Renter>
}
