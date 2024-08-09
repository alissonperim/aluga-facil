import { ICreateOwner } from '@owners/contracts'
import { ICreateOwnerUseCase } from '@owners/usecases/contracts'
import { NextFunction, Request, Response } from 'express'
import { container } from 'tsyringe'

interface CreateOwnerParams extends Request {
  body: ICreateOwner
}

export const create = async (req: CreateOwnerParams, res: Response, next: NextFunction) => {
  const { body } = req

  try {
    const usecase = container.resolve<ICreateOwnerUseCase>('CreateOwnerUseCase')
    const response = await usecase.execute(body)

    return res.created(response)
  } catch (error) {
    next(error)
  }
}
