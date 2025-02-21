import { ILaboratory } from '@packages/types'
import { DeepPartial } from 'typeorm'

export interface IUpdateLaboratoryUseCase {
  execute(id: string, data: DeepPartial<ILaboratory>): Promise<ILaboratory>
}
