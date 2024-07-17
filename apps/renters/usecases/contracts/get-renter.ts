import { IRenter } from '@packages/types'

export interface IGetRenterUseCase {
  execute(id: string): Promise<IRenter>
}
