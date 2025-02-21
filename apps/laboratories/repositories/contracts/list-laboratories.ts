import { Laboratory } from '@entities/laboratory'
import { ListLaboratoriesQueryParams } from '@laboratories/contracts'

export interface IListLaboratoriesRepository {
  list(params: ListLaboratoriesQueryParams): Promise<Laboratory[]>
}
