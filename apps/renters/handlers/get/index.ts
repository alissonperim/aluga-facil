import { IGetUserUseCase } from '@users/usecases/contracts'
import { NextFunction, Request, Response } from 'express'
import { container } from 'tsyringe'

interface GetUserInput extends Request {
    params: {
        id: string
    }

}

export const getUserHandler = async (req: GetUserInput, res: Response, next: NextFunction) => {
    const { id } = req.params

    try {
        const usecase = container.resolve<IGetUserUseCase>('GetUserUseCase')
        const response = await usecase.execute(id)

        res.ok(response)
    } catch (error) {
        next(error)
    }
}
