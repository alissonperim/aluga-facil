import { ListLaboratoriesQueryParams } from '@laboratories/contracts'
import { ILaboratory } from '@packages/types'
import { IListResponse } from '@shared/utils/list-response'

export interface IListLaboratoriesUseCase {
  execute(params: ListLaboratoriesQueryParams): Promise<IListResponse<ILaboratory>>
}
