import { BaseException } from '@shared/exceptions/base-exception'
import { NextFunction, Request, Response } from 'express'

export interface IHttpResponse {
  statusCode: number
  body?: unknown
}

export const HttpResponses = (_: Request, res: Response, next: NextFunction) => {
  res.ok = (data: unknown) => {
    res.status(200).json(data)
  }

  res.created = (data: unknown) => {
    res.status(201).json(data)
  }

  next()
}

export const HttpExceptions = (err, _: Request, res: Response, next: NextFunction) => {
  if (err instanceof BaseException) {
    res.status(err.statusCode).json({ message: err.message, code: err.code })
    next()
  } else {
    res.status(500).json({ message: err.message })
  }
}
