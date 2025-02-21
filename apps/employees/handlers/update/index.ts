import { IUpdateEmployeeUseCase } from '@employees/usecases/contracts'
import { IEmployee } from '@packages/types'
import { NextFunction, Request, Response } from 'express'
import { container } from 'tsyringe'
import { DeepPartial } from 'typeorm'

interface UpdateEmployeeInput extends Request {
  body: DeepPartial<IEmployee>
  params: {
    id: string
  }
}

export const update = async (req: UpdateEmployeeInput, res: Response, next: NextFunction) => {
  const { id } = req.params
  const data = req.body

  try {
    const usecase = container.resolve<IUpdateEmployeeUseCase>('UpdateEmployeeUseCase')
    const response = await usecase.execute(id, data)

    res.ok(response)
  } catch (error) {
    next(error)
  }
}
