import { IOwner } from '@packages/types'
import { DeepPartial } from 'typeorm'

export interface IUpdateOwnerUseCase {
  execute(id: string, data: DeepPartial<IOwner>): Promise<IOwner>
}
