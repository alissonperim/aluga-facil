import { IGetLaboratoryUseCase } from '@laboratories/usecases/contracts'
import { NextFunction, Request, Response } from 'express'
import { container } from 'tsyringe'

interface GetLaboratoryParams extends Request {
  params: {
    id: string
  }
}

export const get = async (req: GetLaboratoryParams, res: Response, next: NextFunction) => {
  const { id } = req.params

  try {
    const usecase = container.resolve<IGetLaboratoryUseCase>('GetLaboratoryUseCase')
    const response = await usecase.execute(id)

    res.ok(response)
  } catch (error) {
    next(error)
  }
}
