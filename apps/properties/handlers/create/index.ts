import { ICreateRenter } from 'apps/renters/contracts'
import { ICreateRenterUseCase } from 'apps/renters/usecases/contracts/create-renter'
import { NextFunction, Request, Response } from 'express'
import { container } from 'tsyringe'

interface CreateRenterInput extends Request {
  body: ICreateRenter
}

export const createRenterHandler = async (req: CreateRenterInput, res: Response, next: NextFunction) => {
  const { body } = req

  try {
    const usecase = container.resolve<ICreateRenterUseCase>('CreateRenterUseCase')
    const response = await usecase.execute(body)

    return res.created(response)
  } catch (error) {
    next(error)
  }
}
