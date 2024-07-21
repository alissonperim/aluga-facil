import { IUser } from '@packages/types'
import { IUpdateRenterUseCase } from '@renters/usecases/contracts'
import { NextFunction, Request, Response } from 'express'
import { container } from 'tsyringe'
import { DeepPartial } from 'typeorm'

interface UpdateRenterInput extends Request {
  body: DeepPartial<IUser>
  params: {
    id: string
  }
}

export const updateRenterHandler = async (req: UpdateRenterInput, res: Response, next: NextFunction) => {
  const { id } = req.params
  const data = req.body

  try {
    const usecase = container.resolve<IUpdateRenterUseCase>('UpdateRenterUseCase')
    const response = await usecase.execute(id, data)

    res.ok(response)
  } catch (error) {
    next(error)
  }
}
