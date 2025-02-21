import { ILaboratory } from '@packages/types'

export interface IGetLaboratoryUseCase {
  execute(id: string): Promise<ILaboratory>
}
