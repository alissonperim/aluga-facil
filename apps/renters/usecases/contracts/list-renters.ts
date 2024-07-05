import { IRenter } from '@packages/types'
import { IListResponse } from '@shared/utils/list-response'

export interface IListRentersUseCase {
    execute(): Promise<IListResponse<IRenter>>
}
