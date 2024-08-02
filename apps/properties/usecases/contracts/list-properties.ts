import { IProperty } from '@packages/types'
import { IListPropertiesQueryStringParams } from '@properties/contracts/list-properties'
import { IListResponse } from '@shared/utils/list-response'

export interface IListPropertiesUseCase {
  execute(params: IListPropertiesQueryStringParams): Promise<IListResponse<IProperty>>
}
