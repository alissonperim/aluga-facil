import { Renter } from '@entities/renter'
import { IRenter } from '@packages/types'
import { DeepPartial } from 'typeorm'

export interface IUpdateRenterRepository {
  update(id: string, data: DeepPartial<IRenter>): Promise<Renter>
}
