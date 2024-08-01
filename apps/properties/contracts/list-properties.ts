import { PropertyType } from '@packages/types'
import * as core from 'express-serve-static-core'

export interface IListPropertiesQueryStringParams extends core.Query {
  type?: PropertyType
}
