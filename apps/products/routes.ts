import { Router } from 'express'
import { pathParamsValidations, queryStringValidations, schemaValidations } from '@shared/validations'
import { openDbConnection } from '@middlewares/open-db-connection'
import { create } from './handlers/create'
import { get } from './handlers/get'
import { list } from './handlers/list'
import { put } from './handlers/update'
import { createProductSchema } from './handlers/create/schema'
import { getProductSchema } from './handlers/get/schema'
import { updateProductPathSchema, updateProductSchema } from './handlers/update/schema'
import { listProductiesSchema } from './handlers/list/schema'

const router = Router()

router.post('/', schemaValidations(createProductSchema), openDbConnection, create)
router.get('/:id', pathParamsValidations(getProductSchema), openDbConnection, get)
router.get('/', queryStringValidations(listProductiesSchema), openDbConnection, list)
router.put(
  '/:id',
  pathParamsValidations(updateProductPathSchema),
  schemaValidations(updateProductSchema),
  openDbConnection,
  put,
)

export { router as productiesRoutes }
