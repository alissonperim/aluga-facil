import { Laboratory } from '@entities/laboratory'
import { ILaboratory } from '@packages/types'
import { DeepPartial } from 'typeorm'

export interface IUpdateLaboratoryRepository {
  update(id: string, data: DeepPartial<ILaboratory>): Promise<Laboratory>
}
