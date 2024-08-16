import { Router } from 'express'
import { create } from './handlers/create'
import { pathParamsValidations, queryStringValidations, schemaValidations } from '@shared/validations'
import { createOwnerSchema } from './handlers/create/schema'
import { openDbConnection } from '@middlewares/open-db-connection'
import { list } from './handlers/list'
import { getOwnerSchema } from './handlers/get/schema'
import { get } from './handlers/get'
import { updateOwnerPathSchema, updateOwnerSchema } from './handlers/update/schema'
import { update } from './handlers/update'
import { listOwnersSchema } from './handlers/list/schema'

const router = Router()

router.post('/', schemaValidations(createOwnerSchema), openDbConnection, create)
router.put(
  '/:id',
  pathParamsValidations(updateOwnerPathSchema),
  schemaValidations(updateOwnerSchema),
  openDbConnection,
  update,
)
router.get('/:id', pathParamsValidations(getOwnerSchema), openDbConnection, get)
router.get('/', queryStringValidations(listOwnersSchema), openDbConnection, list)

export { router as ownersRoutes }
