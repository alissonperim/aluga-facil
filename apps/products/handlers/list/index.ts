import { container } from 'tsyringe'
import { NextFunction, Request, Response } from 'express'
import * as core from 'express-serve-static-core'
import { IListProductsUseCase } from '@products/usecases/contracts'
export interface ListProductsQueryParams extends core.Query {
  renter?: string
  owner?: string
}

interface ListPropertiesParams extends Request {
  query: ListProductsQueryParams
}

export const list = async (req: ListPropertiesParams, res: Response, next: NextFunction) => {
  const params = req.query
  try {
    const usecase = container.resolve<IListProductsUseCase>('ListProductsUseCase')
    const products = await usecase.execute(params)
    res.ok(products)
  } catch (error) {
    next(error)
  }
}
