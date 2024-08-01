import { Property } from '@entities/property'
import { ListRentersQueryStringParams } from '@renters/handlers/list'

export interface IListPropertiesRepository {
  list(params: ListRentersQueryStringParams): Promise<Property[]>
}
