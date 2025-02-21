import { ICustomer } from '@packages/types'
import { IUpdateCustomerUseCase } from '@customers/usecases/contracts'
import { NextFunction, Request, Response } from 'express'
import { container } from 'tsyringe'
import { DeepPartial } from 'typeorm'

interface UpdateCustomerInput extends Request {
  body: DeepPartial<ICustomer>
  params: {
    id: string
  }
}

export const update = async (req: UpdateCustomerInput, res: Response, next: NextFunction) => {
  console.log('PARAMS', req.params)
  const { id } = req.params
  const data = req.body

  try {
    const usecase = container.resolve<IUpdateCustomerUseCase>('UpdateCustomerUseCase')
    const response = await usecase.execute(id, data)

    res.ok(response)
  } catch (error) {
    next(error)
  }
}
