import { ICreateEmployee } from '@employees/contracts'
import { ICreateEmployeeUseCase } from '@employees/usecases/contracts'
import { NextFunction, Request, Response } from 'express'
import { container } from 'tsyringe'

interface CreateEmployeeInput extends Request {
  body: ICreateEmployee
}

export const create = async (req: CreateEmployeeInput, res: Response, next: NextFunction) => {
  const { body } = req

  try {
    const usecase = container.resolve<ICreateEmployeeUseCase>('CreateEmployeeUseCase')
    const response = await usecase.execute(body)

    return res.created(response)
  } catch (error) {
    next(error)
  }
}
