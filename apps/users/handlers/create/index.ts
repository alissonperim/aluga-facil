import { ICreateUser } from '@users/contracts'
import { ICreateUserUseCase } from '@users/usecases/contracts/create-user'
import { NextFunction, Request, Response } from 'express'
import { container } from 'tsyringe'

interface CreateUserInput extends Request {
  body: ICreateUser
}

export const createUserHandler = async (req: CreateUserInput, res: Response, next: NextFunction) => {
  const { body } = req

  try {
    const usecase = container.resolve<ICreateUserUseCase>('CreateUserUseCase')
    const response = await usecase.execute(body)

    return res.created(response)
  } catch (error) {
    next(error)
  }
}
