import { Renter } from '@entities/renter'
import { ICreateRenter } from 'apps/renters/contracts'

export interface ICreateRenterUseCase {
  execute(data: ICreateRenter): Promise<Renter>
}
