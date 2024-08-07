import { Router } from 'express'
import { pathParamsValidations, queryStringValidations, schemaValidations } from '@shared/validations'
import { openDbConnection } from '@middlewares/open-db-connection'
import { createRenterSchema } from './handlers/create/schema'
import { createRenterHandler } from './handlers/create'
import { getRenterHandler } from './handlers/get'
import { getRenterSchema } from './handlers/get/schema'
import { listRentersSchema } from './handlers/list/schema'
import { listRentersHandler } from './handlers/list'
import { updateRenterPathSchema, updateRenterSchema } from './handlers/update/schema'
import { updateRenterHandler } from './handlers/update'

const router = Router()

router.post('/', schemaValidations(createRenterSchema), openDbConnection, createRenterHandler)
router.get('/:id', pathParamsValidations(getRenterSchema), openDbConnection, getRenterHandler)
router.get('/', queryStringValidations(listRentersSchema), openDbConnection, listRentersHandler)
router.put(
  '/:id',
  pathParamsValidations(updateRenterPathSchema),
  schemaValidations(updateRenterSchema),
  openDbConnection,
  updateRenterHandler,
)

export { router as rentersRoutes }
