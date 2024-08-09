import { ListOwnersQueryParams } from '@owners/contracts/list-owners'
import { IOwner } from '@packages/types'
import { IListResponse } from '@shared/utils/list-response'

export interface IListOwnersUseCase {
  execute(params: ListOwnersQueryParams): Promise<IListResponse<IOwner>>
}
