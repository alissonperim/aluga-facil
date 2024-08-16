import { IUpdateOwnerUseCase } from '@owners/usecases/contracts'
import { IOwner } from '@packages/types'
import { NextFunction, Request, Response } from 'express'
import { container } from 'tsyringe'
import { DeepPartial } from 'typeorm'

interface UpdateOwnerParams extends Request {
  body: DeepPartial<IOwner>
  params: {
    id: string
  }
}

export const update = async (req: UpdateOwnerParams, res: Response, next: NextFunction) => {
  const { id } = req.params
  const data = req.body

  try {
    const usecase = container.resolve<IUpdateOwnerUseCase>('UpdateOwnerUseCase')
    const response = await usecase.execute(id, data)

    res.ok(response)
  } catch (error) {
    next(error)
  }
}
