import { NextFunction, Request, Response } from 'express'
import * as yup from 'yup'

export const schemaValidations = (schema: yup.Schema) => async (req: Request, res: Response, next: NextFunction) => {
  const bodyData = req?.body

  try {
    await schema.validate(bodyData, { abortEarly: false, recursive: true, stripUnknown: false })
    next()
  } catch (error) {
    return res.status(400).json({ message: error.errors })
  }
}

export const pathParamsValidations =
  (schema: yup.Schema) => async (req: Request, res: Response, next: NextFunction) => {
    const data = req.params

    try {
      await schema.validate(data, { abortEarly: false, recursive: true })
      next()
    } catch (error) {
      return res.status(400).json({ message: error.errors })
    }
  }

export const queryStringValidations =
  (schema: yup.Schema) => async (req: Request, res: Response, next: NextFunction) => {
    const data = req.query

    try {
      await schema.validate(data, { abortEarly: false, recursive: true, stripUnknown: false })
      next()
    } catch (error) {
      return res.status(400).json({ message: error.errors })
    }
  }
