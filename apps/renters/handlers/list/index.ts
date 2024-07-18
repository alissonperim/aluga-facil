import { container } from 'tsyringe'
import { NextFunction, Request, Response } from 'express'
import { IListRentersUseCase } from '@renters/usecases/contracts'

interface ListRentersInput extends Request {
  queryStringParameters: any
}

export const listRentersHandler = async (_: ListRentersInput, res: Response, next: NextFunction) => {
  try {
    const usecase = container.resolve<IListRentersUseCase>('ListRentersUseCase')
    const users = await usecase.execute()
    res.ok(users)
  } catch (error) {
    next(error)
  }
}
