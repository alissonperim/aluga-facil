import { IUser } from '@packages/types'
import { IListResponse } from '@shared/utils/list-response'

export interface IListUsersUseCase {
  execute(): Promise<IListResponse<IUser>>
}
