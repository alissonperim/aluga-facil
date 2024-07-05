import { Renter } from '@entities/renter'
import { ICreateRenter } from 'apps/renters/contracts/create-renter'

export interface ICreateRenterRepository {
  create(data: ICreateRenter): Promise<Renter>
}
