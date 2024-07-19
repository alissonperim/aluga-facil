import { IRenter } from '@packages/types'
import { ListRentersQueryStringParams } from '@renters/handlers/list'
import { IListResponse } from '@shared/utils/list-response'

export interface IListRentersUseCase {
  execute(params: ListRentersQueryStringParams): Promise<IListResponse<IRenter>>
}
