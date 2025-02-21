import { NextFunction, Request, Response } from 'express'
import { container } from 'tsyringe'
import * as core from 'express-serve-static-core'
import { IListLaboratoriesUseCase } from '@laboratories/usecases/contracts'

export interface ListLaboratoriesQueryStringParams extends core.Query {
  document?: string
  name?: string
  fantasyName?: string
}

interface ListLaboratoriesParams extends Request {
  query: ListLaboratoriesQueryStringParams
}

export const list = async (req: ListLaboratoriesParams, res: Response, next: NextFunction) => {
  const params = req.query

  try {
    const usecase = container.resolve<IListLaboratoriesUseCase>('ListLaboratoriesUseCase')
    const users = await usecase.execute(params)
    res.ok(users)
  } catch (error) {
    next(error)
  }
}
