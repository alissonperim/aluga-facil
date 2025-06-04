import { ICustomer } from '@packages/types'
import { IListResponse } from '@shared/utils/list-response'

export interface IListCustomersUseCase {
  execute(): Promise<IListResponse<ICustomer>>
}
