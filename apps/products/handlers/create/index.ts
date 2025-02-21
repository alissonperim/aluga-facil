import { ICreateProduct } from '@products/contracts'
import { ICreateProductUseCase } from '@products/usecases/contracts'
import { NextFunction, Request, Response } from 'express'
import { container } from 'tsyringe'

interface CreateProductParams extends Request {
  body: ICreateProduct
}

export const create = async (req: CreateProductParams, res: Response, next: NextFunction) => {
  const { body } = req

  try {
    const usecase = container.resolve<ICreateProductUseCase>('CreateProductUseCase')
    const response = await usecase.execute(body)

    return res.created(response)
  } catch (error) {
    next(error)
  }
}
