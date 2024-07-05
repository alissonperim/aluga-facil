import { IUser } from '@packages/types'
import { IUpdateUserUseCase } from '@users/usecases/contracts'
import { NextFunction, Request, Response } from 'express'
import { container } from 'tsyringe'
import { DeepPartial } from 'typeorm'

interface UpdateUserInput extends Request {
    body: DeepPartial<IUser>
    params: {
        id: string
    }
}

export const updateUserHandler = async (req: UpdateUserInput, res: Response, next: NextFunction) => {
    console.log('PARAMS', req.params)
    const { id } = req.params
    const data = req.body

    try {
        const usecase = container.resolve<IUpdateUserUseCase>('UpdateUserUseCase')
        const response = await usecase.execute(id, data)

        res.ok(response)
    } catch (error) {
        next(error)
    }
}
