import 'reflect-metadata'
import 'express-async-errors'
import 'dotenv/config'
import express from 'express'
import config from '@sessions/super-tokens'
import { midiffy } from './middlewares/midiffy'
import { UsersDependencyInjection } from '@users/contracts/dependency-injection'
import { HttpExceptions } from '@shared/http-responses'
import { router } from './routes'
import { RentersDependencyInjection } from 'apps/renters/contracts'
import { OwnersDependencyInjection } from '@owners/contracts/dependency-injection'
import { PropertiesDependencyInjection } from '@properties/contracts'
import { SharedRepositoryDependencyInjection } from '@shared/repository/contracts/dependecy-injection'
import helmet from 'helmet'
import SuperTokens from 'supertokens-node/lib/build/supertokens'

UsersDependencyInjection.execute()
RentersDependencyInjection.execute()
OwnersDependencyInjection.execute()
PropertiesDependencyInjection.execute()
SharedRepositoryDependencyInjection.execute()

const app = express()
SuperTokens.init(config)

midiffy(app)

app.use(router)
app.use(HttpExceptions)
app.disable('x-powered-by')

if (process.env.NODE_ENV === 'prod') {
  app.use(helmet())
}

app.listen(3333, () => {
  console.log('Server is running on port 3333')
})
