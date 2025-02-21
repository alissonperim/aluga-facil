import { employeesRoutes } from '@employees/routes'
import { laboratoriesRoutes } from '@laboratories/routes'
import { productiesRoutes } from '@products/routes'
import { usersRoutes } from '@customers/routes'
import { Router } from 'express'

const router = Router()
const VERSION = 'v1'

router.use(`/${VERSION}/customers`, usersRoutes)
router.use(`/${VERSION}/producties`, productiesRoutes)
router.use(`/${VERSION}/laboratories`, laboratoriesRoutes)
router.use(`/${VERSION}/employees`, employeesRoutes)

export { router }
