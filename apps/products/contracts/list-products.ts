import * as core from 'express-serve-static-core'

export interface IListProductsQueryStringParams extends core.Query {
  name?: string
  genericName?: string
}
