import { IListCustomersUseCase } from '@customers/usecases/contracts'
import { NextFunction, Request, Response } from 'express'
import { container } from 'tsyringe'

interface ListCustomersEvent extends Request {
  queryStringParameters: any
}

export const list = async (_: ListCustomersEvent, res: Response, next: NextFunction) => {
  try {
    const usecase = container.resolve<IListCustomersUseCase>('ListCustomersUseCase')
    const users = await usecase.execute()
    res.ok(users)
  } catch (error) {
    next(error)
  }
}
