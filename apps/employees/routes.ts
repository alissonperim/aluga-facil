import { Router } from 'express'
import { pathParamsValidations, queryStringValidations, schemaValidations } from '@shared/validations'
import { openDbConnection } from '@middlewares/open-db-connection'
import { createEmployeeSchema } from './handlers/create/schema'
import { create } from './handlers/create'
import { getEmployeeSchema } from './handlers/get/schema'
import { get } from './handlers/get'
import { list } from './handlers/list'
import { listEmployeesSchema } from './handlers/list/schema'
import { updateEmployeePathSchema, updateEmployeeSchema } from './handlers/update/schema'
import { update } from './handlers/update'

const router = Router()

router.post('/', schemaValidations(createEmployeeSchema), openDbConnection, create)
router.get('/:id', pathParamsValidations(getEmployeeSchema), openDbConnection, get)
router.get('/', queryStringValidations(listEmployeesSchema), openDbConnection, list)
router.put(
  '/:id',
  pathParamsValidations(updateEmployeePathSchema),
  schemaValidations(updateEmployeeSchema),
  openDbConnection,
  update,
)

export { router as employeesRoutes }
