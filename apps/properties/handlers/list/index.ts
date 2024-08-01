import { container } from 'tsyringe'
import { NextFunction, Request, Response } from 'express'
import { IListRentersUseCase } from '@renters/usecases/contracts'
import * as core from 'express-serve-static-core'

export interface ListRentersQueryStringParams extends core.Query {
  document?: string
  email?: string
  phoneNumber?: string
}

interface ListRentersInput extends Request {
  query: ListRentersQueryStringParams
}

export const listRentersHandler = async (req: ListRentersInput, res: Response, next: NextFunction) => {
  const params = req.query
  try {
    const usecase = container.resolve<IListRentersUseCase>('ListRentersUseCase')
    const renters = await usecase.execute(params)
    res.ok(renters)
  } catch (error) {
    next(error)
  }
}
