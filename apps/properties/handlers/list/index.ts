import { container } from 'tsyringe'
import { NextFunction, Request, Response } from 'express'
import * as core from 'express-serve-static-core'
import { IListPropertiesUseCase } from '@properties/usecases/contracts'

export interface ListPropertiesQueryParams extends core.Query {
  renter?: string
  owner?: string
}

interface ListPropertiesParams extends Request {
  query: ListPropertiesQueryParams
}

export const list = async (req: ListPropertiesParams, res: Response, next: NextFunction) => {
  const params = req.query
  try {
    const usecase = container.resolve<IListPropertiesUseCase>('ListPropertiesUseCase')
    const renters = await usecase.execute(params)
    res.ok(renters)
  } catch (error) {
    next(error)
  }
}
