import { IGetRenterUseCase } from '@renters/usecases/contracts/get-renter'
import { NextFunction, Request, Response } from 'express'
import { container } from 'tsyringe'

interface GetRenterInput extends Request {
  params: {
    id: string
  }
}

export const getRenterHandler = async (req: GetRenterInput, res: Response, next: NextFunction) => {
  const { id } = req.params

  try {
    const usecase = container.resolve<IGetRenterUseCase>('GetRenterUseCase')
    const response = await usecase.execute(id)

    res.ok(response)
  } catch (error) {
    next(error)
  }
}
