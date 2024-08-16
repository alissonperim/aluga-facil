import 'reflect-metadata'
import 'express-async-errors'
import express from 'express'
import { midiffy } from './middlewares/midiffy'
import { UsersDependencyInjection } from '@users/contracts/dependency-injection'
import { HttpExceptions } from '@shared/http-responses'
import { router } from './routes'
import { RentersDependencyInjection } from 'apps/renters/contracts'
import { OwnersDependencyInjection } from '@owners/contracts/dependency-injection'
import { PropertiesDependencyInjection } from '@properties/contracts'
import { SharedRepositoryDependencyInjection } from '@shared/repository/contracts/dependecy-injection'

UsersDependencyInjection.execute()
RentersDependencyInjection.execute()
OwnersDependencyInjection.execute()
PropertiesDependencyInjection.execute()
SharedRepositoryDependencyInjection.execute()

const app = express()

midiffy(app)

app.use(router)
app.use(HttpExceptions)

app.listen(3333, () => {
  console.log('Server is running on port 3333')
})
