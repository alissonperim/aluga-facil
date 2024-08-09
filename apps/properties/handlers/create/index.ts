import { ICreateProperty } from '@properties/contracts'
import { ICreatePropertyUseCase } from '@properties/usecases/contracts'
import { NextFunction, Request, Response } from 'express'
import { container } from 'tsyringe'

interface CreatePropertyParams extends Request {
  body: ICreateProperty
}

export const create = async (req: CreatePropertyParams, res: Response, next: NextFunction) => {
  const { body } = req

  try {
    const usecase = container.resolve<ICreatePropertyUseCase>('CreatePropertyUseCase')
    const response = await usecase.execute(body)

    return res.created(response)
  } catch (error) {
    next(error)
  }
}
