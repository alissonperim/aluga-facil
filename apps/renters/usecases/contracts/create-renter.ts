import { IRenter } from '@packages/types'
import { ICreateRenter } from 'apps/renters/contracts'

export interface ICreateRenterUseCase {
  execute(data: ICreateRenter): Promise<IRenter>
}
