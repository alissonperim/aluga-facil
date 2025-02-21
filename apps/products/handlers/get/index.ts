import { IGetProductUseCase } from '@products/usecases/contracts'
import { NextFunction, Request, Response } from 'express'
import { container } from 'tsyringe'

interface GetPropertyParams extends Request {
  params: {
    id: string
  }
}

export const get = async (req: GetPropertyParams, res: Response, next: NextFunction) => {
  const { id } = req.params

  try {
    const usecase = container.resolve<IGetProductUseCase>('GetProductUseCase')
    const response = await usecase.execute(id)

    res.ok(response)
  } catch (error) {
    next(error)
  }
}
