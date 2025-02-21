import 'reflect-metadata'
import 'express-async-errors'
import express from 'express'
import { midiffy } from './middlewares/midiffy'
import { HttpExceptions } from '@shared/http-responses'
import { router } from './routes'
import { CustomersDependencyInjection } from '@customers/contracts'
import { EmployeesDependencyInjection } from '@employees/contracts'
import { LaboratoriesDependencyInjection } from '@laboratories/contracts'
import { ProductsDependencyInjection } from '@products/contracts'
import { SharedRepositoryDependencyInjection } from '@shared/repository/contracts/dependecy-injection'
import supertokens from 'supertokens-node'
import config from '@sessions/super-tokens'

CustomersDependencyInjection.execute()
EmployeesDependencyInjection.execute()
LaboratoriesDependencyInjection.execute()
ProductsDependencyInjection.execute()
SharedRepositoryDependencyInjection.execute()

const app = express()
supertokens.init(config)

midiffy(app)

app.use(router)
app.use(HttpExceptions)

app.listen(3333, () => {
  console.log('Server is running on port 3333')
})
