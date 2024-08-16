import { ownersRoutes } from '@owners/routes'
import { propertiesRoutes } from '@properties/routes'
import { usersRoutes } from '@users/routes'
import { rentersRoutes } from 'apps/renters/routes'
import { Router } from 'express'

const router = Router()
const VERSION = 'v1'

router.use(`/${VERSION}/users`, usersRoutes)
router.use(`/${VERSION}/renters`, rentersRoutes)
router.use(`/${VERSION}/properties`, propertiesRoutes)
router.use(`/${VERSION}/owners`, ownersRoutes)

export { router }
