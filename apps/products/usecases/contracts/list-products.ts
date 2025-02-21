import { IProduct } from '@packages/types/product'
import { IListProductsQueryStringParams } from '@products/contracts/list-products'
import { IListResponse } from '@shared/utils/list-response'

export interface IListProductsUseCase {
  execute(params: IListProductsQueryStringParams): Promise<IListResponse<IProduct>>
}
