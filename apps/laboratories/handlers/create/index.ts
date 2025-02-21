import { ICreateLaboratory } from '@laboratories/contracts'
import { ICreateLaboratoryUseCase } from '@laboratories/usecases/contracts'
import { NextFunction, Request, Response } from 'express'
import { container } from 'tsyringe'

interface CreateLaboratoryParams extends Request {
  body: ICreateLaboratory
}

export const create = async (req: CreateLaboratoryParams, res: Response, next: NextFunction) => {
  const { body } = req

  try {
    const usecase = container.resolve<ICreateLaboratoryUseCase>('CreateLaboratoryUseCase')
    const response = await usecase.execute(body)

    return res.created(response)
  } catch (error) {
    next(error)
  }
}
