import { usersRoutes } from '@users/routes'
import { rentersRoutes } from 'apps/renters/routes'
import { Router } from 'express'

const router = Router()
const VERSION = 'v1'

router.use(`/${VERSION}/users`, usersRoutes)
router.use(`/${VERSION}/renters`, rentersRoutes)

export { router }
