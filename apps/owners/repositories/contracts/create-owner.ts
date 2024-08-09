import { Owner } from '@entities/owner'
import { ICreateOwner } from 'apps/owners/contracts'

export interface ICreateOwnerRepository {
  create(data: ICreateOwner): Promise<Owner>
}
