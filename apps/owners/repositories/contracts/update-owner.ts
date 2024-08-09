import { Owner } from '@entities/owner'
import { IOwner } from '@packages/types'
import { DeepPartial } from 'typeorm'

export interface IUpdateOwnerRepository {
  update(id: string, data: DeepPartial<IOwner>): Promise<Owner>
}
