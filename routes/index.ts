import { employeesRoutes } from '@employees/routes'
import { usersRoutes } from '@customers/routes'
import { Router } from 'express'

const router = Router()
const VERSION = 'v1'

router.use(`/${VERSION}/customers`, usersRoutes)
router.use(`/${VERSION}/employees`, employeesRoutes)

export { router }
