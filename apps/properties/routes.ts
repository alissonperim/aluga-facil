import { Router } from 'express'
import { pathParamsValidations, queryStringValidations, schemaValidations } from '@shared/validations'
import { openDbConnection } from '@middlewares/open-db-connection'
import { createPropertySchema } from './handlers/create/schema'
import { create } from './handlers/create'
import { get } from './handlers/get'
import { list } from './handlers/list'
import { getPropertySchema } from './handlers/get/schema'
import { listPropertiesSchema } from './handlers/list/schema'
import { updatePropertyPathSchema, updatePropertySchema } from './handlers/update/schema'
import { put } from './handlers/update'

const router = Router()

router.post('/', schemaValidations(createPropertySchema), openDbConnection, create)
router.get('/:id', pathParamsValidations(getPropertySchema), openDbConnection, get)
router.get('/', queryStringValidations(listPropertiesSchema), openDbConnection, list)
router.put(
  '/:id',
  pathParamsValidations(updatePropertyPathSchema),
  schemaValidations(updatePropertySchema),
  openDbConnection,
  put,
)

export { router as rentersRoutes }
