import { IProduct } from '@packages/types/product'
import { IUpdateProductUseCase } from '@products/usecases/contracts'
import { NextFunction, Request, Response } from 'express'
import { container } from 'tsyringe'
import { DeepPartial } from 'typeorm'

interface UpdateProductParams extends Request {
  body: DeepPartial<IProduct>
  params: {
    id: string
  }
}

export const put = async (req: UpdateProductParams, res: Response, next: NextFunction) => {
  const { id } = req.params
  const data = req.body

  try {
    const usecase = container.resolve<IUpdateProductUseCase>('UpdateProductUseCase')
    const product = await usecase.execute(id, data)

    res.ok(product)
  } catch (error) {
    next(error)
  }
}
