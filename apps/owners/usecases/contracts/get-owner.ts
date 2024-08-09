import { IOwner } from '@packages/types'

export interface IGetOwnerUseCase {
  execute(id: string): Promise<IOwner>
}
