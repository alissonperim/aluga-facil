import { IGetOwnerUseCase } from '@owners/usecases/contracts'
import { NextFunction, Request, Response } from 'express'
import { container } from 'tsyringe'

interface GetOwnerParams extends Request {
  params: {
    id: string
  }
}

export const get = async (req: GetOwnerParams, res: Response, next: NextFunction) => {
  const { id } = req.params

  try {
    const usecase = container.resolve<IGetOwnerUseCase>('GetOwnerUseCase')
    const response = await usecase.execute(id)

    res.ok(response)
  } catch (error) {
    next(error)
  }
}
