import { Router } from 'express'
import { create } from './handlers/create'
import { pathParamsValidations, schemaValidations } from '@shared/validations'
import { createCustomerSchema } from './handlers/create/schema'
import { openDbConnection } from '@middlewares/open-db-connection'
import { list } from './handlers/list'
import { getCustomerSchema } from './handlers/get/schema'
import { get } from './handlers/get'
import { updateCustomerPathSchema, updateCustomerSchema } from './handlers/update/schema'
import { update } from './handlers/update'

const router = Router()

router.post('/', schemaValidations(createCustomerSchema), openDbConnection, create)
router.put(
  '/:id',
  pathParamsValidations(updateCustomerPathSchema),
  schemaValidations(updateCustomerSchema),
  openDbConnection,
  update,
)
router.get('/:id', pathParamsValidations(getCustomerSchema), openDbConnection, get)
router.get('/', openDbConnection, list)

export { router as usersRoutes }
