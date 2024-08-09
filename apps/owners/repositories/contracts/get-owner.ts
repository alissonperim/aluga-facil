import { Owner } from '@entities/owner'

export interface IGetOwnerRepository {
  get(id: string): Promise<Owner>
}
