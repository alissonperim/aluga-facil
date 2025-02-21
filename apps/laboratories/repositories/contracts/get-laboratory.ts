import { Laboratory } from '@entities/laboratory'

export interface IGetLaboratoryRepository {
  get(id: string): Promise<Laboratory>
}
