import { IGetCustomerUseCase } from '@customers/usecases/contracts'
import { NextFunction, Request, Response } from 'express'
import { container } from 'tsyringe'

interface GetCustomerInput extends Request {
  params: {
    id: string
  }
}

export const get = async (req: GetCustomerInput, res: Response, next: NextFunction) => {
  const { id } = req.params

  try {
    const usecase = container.resolve<IGetCustomerUseCase>('GetCustomerUseCase')
    const response = await usecase.execute(id)

    res.ok(response)
  } catch (error) {
    next(error)
  }
}
