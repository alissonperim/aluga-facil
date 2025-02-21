import { IUpdateLaboratoryUseCase } from '@laboratories/usecases/contracts'
import { ILaboratory } from '@packages/types'
import { NextFunction, Request, Response } from 'express'
import { container } from 'tsyringe'
import { DeepPartial } from 'typeorm'

interface UpdateLaboratoryParams extends Request {
  body: DeepPartial<ILaboratory>
  params: {
    id: string
  }
}

export const update = async (req: UpdateLaboratoryParams, res: Response, next: NextFunction) => {
  const { id } = req.params
  const data = req.body

  try {
    const usecase = container.resolve<IUpdateLaboratoryUseCase>('UpdateLaboratoryUseCase')
    const response = await usecase.execute(id, data)

    res.ok(response)
  } catch (error) {
    next(error)
  }
}
