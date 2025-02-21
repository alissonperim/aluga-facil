import { IGetEmployeeUseCase } from '@employees/usecases/contracts'
import { NextFunction, Request, Response } from 'express'
import { container } from 'tsyringe'

interface GetEmployeeInput extends Request {
  params: {
    id: string
  }
}

export const get = async (req: GetEmployeeInput, res: Response, next: NextFunction) => {
  const { id } = req.params

  try {
    const usecase = container.resolve<IGetEmployeeUseCase>('GetEmployeeUseCase')
    const response = await usecase.execute(id)

    res.ok(response)
  } catch (error) {
    next(error)
  }
}
