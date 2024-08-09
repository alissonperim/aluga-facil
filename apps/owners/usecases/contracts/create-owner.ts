import { ICreateOwner } from '@owners/contracts'
import { IOwner } from '@packages/types'

export interface ICreateOwnerUseCase {
  execute(data: ICreateOwner): Promise<IOwner>
}
