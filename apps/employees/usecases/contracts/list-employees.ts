import { ListEmployeesQueryStringParams } from '@employees/handlers/list'
import { IEmployee } from '@packages/types'
import { IListResponse } from '@shared/utils/list-response'

export interface IListEmployeesUseCase {
  execute(params: ListEmployeesQueryStringParams): Promise<IListResponse<IEmployee>>
}
