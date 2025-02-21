import { HttpResponses } from '@shared/http-responses'
import express, { Express } from 'express'
import cors from 'cors'
import supertokens from 'supertokens-node'
import { errorHandler, middleware } from 'supertokens-node/framework/express'

export const midiffy = (app: Express) => {
  app
    .use(express.json())
    .use(
      cors({
        origin: 'http://localhost:3000',
        allowedHeaders: ['content-type', ...supertokens.getAllCORSHeaders()],
        credentials: true,
      }),
    )
    .use(middleware())
    .use(errorHandler())
    .use(HttpResponses)
}
