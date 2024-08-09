import { IUser } from '@packages/types'
import { IUpdatePropertyUseCase } from '@properties/usecases/contracts'
import { NextFunction, Request, Response } from 'express'
import { container } from 'tsyringe'
import { DeepPartial } from 'typeorm'

interface UpdatePropertyParams extends Request {
  body: DeepPartial<IUser>
  params: {
    id: string
  }
}

export const put = async (req: UpdatePropertyParams, res: Response, next: NextFunction) => {
  const { id } = req.params
  const data = req.body

  try {
    const usecase = container.resolve<IUpdatePropertyUseCase>('UpdatePropertyUseCase')
    const response = await usecase.execute(id, data)

    res.ok(response)
  } catch (error) {
    next(error)
  }
}
