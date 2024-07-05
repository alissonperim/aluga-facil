import { IListUsersUseCase } from '@users/usecases/contracts'
import { NextFunction, Request, Response } from 'express'
import { container } from 'tsyringe'

interface ListUsersEvent extends Request{
    queryStringParameters: any
}

export const listUsersHandler = async (_: ListUsersEvent, res: Response, next: NextFunction) => {
    try {
        const usecase = container.resolve<IListUsersUseCase>('ListUsersUseCase')
        const users = await usecase.execute()
        res.ok(users)
    } catch (error) {
        next(error)
    }
}
