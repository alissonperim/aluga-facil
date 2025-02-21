import { container } from 'tsyringe'
import { NextFunction, Request, Response } from 'express'
import * as core from 'express-serve-static-core'
import { IListEmployeesUseCase } from '@employees/usecases/contracts'

export interface ListEmployeesQueryStringParams extends core.Query {
  document?: string
  email?: string
  phoneNumber?: string
}

interface ListEmployeesInput extends Request {
  query: ListEmployeesQueryStringParams
}

export const list = async (req: ListEmployeesInput, res: Response, next: NextFunction) => {
  const params = req.query
  try {
    const usecase = container.resolve<IListEmployeesUseCase>('ListEmployeesUseCase')
    const employees = await usecase.execute(params)
    res.ok(employees)
  } catch (error) {
    next(error)
  }
}
