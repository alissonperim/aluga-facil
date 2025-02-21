import { Laboratory } from '@entities/laboratory'
import { ICreateLaboratory } from '@laboratories/contracts'

export interface ICreateLaboratoryRepository {
  create(data: ICreateLaboratory): Promise<Laboratory>
}
