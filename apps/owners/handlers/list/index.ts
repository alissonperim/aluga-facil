import { NextFunction, Request, Response } from 'express'
import { container } from 'tsyringe'
import * as core from 'express-serve-static-core'
import { IListOwnersUseCase } from '@owners/usecases/contracts'

export interface ListOwnersQueryStringParams extends core.Query {
  document?: string
  email?: string
  phoneNumber?: string
}

interface ListOwnersParams extends Request {
  query: ListOwnersQueryStringParams
}

export const list = async (req: ListOwnersParams, res: Response, next: NextFunction) => {
  const params = req.query

  try {
    const usecase = container.resolve<IListOwnersUseCase>('ListOwnersUseCase')
    const users = await usecase.execute(params)
    res.ok(users)
  } catch (error) {
    next(error)
  }
}
