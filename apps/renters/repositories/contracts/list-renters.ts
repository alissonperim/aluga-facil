import { Renter } from '@entities/renter'
import { ListRentersQueryStringParams } from '@renters/handlers/list'

export interface IListRentersRepository {
  list(params: ListRentersQueryStringParams): Promise<Renter[]>
}
