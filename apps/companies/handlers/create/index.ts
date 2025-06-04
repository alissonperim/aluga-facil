import { ICreateCustomer } from '@customers/contracts'
import { ICreateCustomerUseCase } from '@customers/usecases/contracts/create-customer'
import { NextFunction, Request, Response } from 'express'
import { container } from 'tsyringe'

interface CreateCustomerInput extends Request {
  body: ICreateCustomer
}

export const create = async (req: CreateCustomerInput, res: Response, next: NextFunction) => {
  const { body } = req

  try {
    const usecase = container.resolve<ICreateCustomerUseCase>('CreateCustomerUseCase')
    const response = await usecase.execute(body)

    return res.created(response)
  } catch (error) {
    next(error)
  }
}
