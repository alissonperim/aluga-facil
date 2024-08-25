import { ownersRoutes } from '@owners/routes'
import { propertiesRoutes } from '@properties/routes'
import { usersRoutes } from '@users/routes'
import { rentersRoutes } from 'apps/renters/routes'
import { Router } from 'express'
import { SessionRequest } from 'supertokens-node/framework/express'
import { verifySession } from 'supertokens-node/recipe/session/framework/express'

const router = Router()
const VERSION = 'v1'

router.use(`/${VERSION}/users`, usersRoutes)
router.use(`/${VERSION}/renters`, rentersRoutes)
router.use(`/${VERSION}/properties`, propertiesRoutes)
router.use(`/${VERSION}/owners`, ownersRoutes)
router.use(`/${VERSION}/session/verify`, verifySession(), (req: SessionRequest, res) => {
  const { session } = req

  const jwt = session.getAccessToken()

  console.log('jwt', jwt)

  return res.json({ token: jwt })
})

export { router }
