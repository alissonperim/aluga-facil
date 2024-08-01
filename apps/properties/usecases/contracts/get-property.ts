import { IProperty } from '@packages/types'

export interface IGetPropertyUseCase {
  execute(id: string): Promise<IProperty>
}
