import { Renter } from '@entities/renter'

export interface IListRentersRepository {
  list(): Promise<Renter[]>
}
