import { Router } from 'express'
import { schemaValidations } from '@shared/validations'
import { openDbConnection } from '@middlewares/open-db-connection'
import { createRenterSchema } from './handlers/create/schema'
import { createRenterHandler } from './handlers/create'

const router = Router()

router.post('/', schemaValidations(createRenterSchema), openDbConnection, createRenterHandler)

export { router as rentersRoutes }
