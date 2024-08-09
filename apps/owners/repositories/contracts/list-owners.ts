import { Owner } from '@entities/owner'
import { ListOwnersQueryParams } from 'apps/owners/contracts/list-owners'

export interface IListOwnersRepository {
  list(params: ListOwnersQueryParams): Promise<Owner[]>
}
