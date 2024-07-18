import { Router } from 'express'
import { pathParamsValidations, schemaValidations } from '@shared/validations'
import { openDbConnection } from '@middlewares/open-db-connection'
import { createRenterSchema } from './handlers/create/schema'
import { createRenterHandler } from './handlers/create'
import { getRenterHandler } from './handlers/get'
import { getRenterSchema } from './handlers/get/schema'

const router = Router()

router.post('/', schemaValidations(createRenterSchema), openDbConnection, createRenterHandler)
router.get('/:id', pathParamsValidations(getRenterSchema), openDbConnection, getRenterHandler)

export { router as rentersRoutes }
