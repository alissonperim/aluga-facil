import { Router } from 'express'
import { create } from './handlers/create'
import { pathParamsValidations, queryStringValidations, schemaValidations } from '@shared/validations'
import { openDbConnection } from '@middlewares/open-db-connection'
import { list } from './handlers/list'
import { get } from './handlers/get'
import { update } from './handlers/update'
import { createLaboratorySchema } from './handlers/create/schema'
import { getLaboratorySchema } from './handlers/get/schema'
import { updateLaboratoryPathSchema, updateLaboratorySchema } from './handlers/update/schema'
import { listLaboratoriesSchema } from './handlers/list/schema'

const router = Router()

router.post('/', schemaValidations(createLaboratorySchema), openDbConnection, create)
router.put(
  '/:id',
  pathParamsValidations(updateLaboratoryPathSchema),
  schemaValidations(updateLaboratorySchema),
  openDbConnection,
  update,
)
router.get('/:id', pathParamsValidations(getLaboratorySchema), openDbConnection, get)
router.get('/', queryStringValidations(listLaboratoriesSchema), openDbConnection, list)

export { router as laboratoriesRoutes }
