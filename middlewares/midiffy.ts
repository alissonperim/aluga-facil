import { HttpResponses } from '@shared/http-responses'
import supertokens from 'supertokens-node'
import express, { Express } from 'express'
import cors from 'cors'
import { middleware } from 'supertokens-node/framework/express'

export const midiffy = (app: Express) => {
  app
    .use(express.json())
    .use(HttpResponses)
    .use(
      cors({
        origin: 'http://localhost:3333',
        allowedHeaders: ['content-type', ...supertokens.getAllCORSHeaders()],
        credentials: true,
      }),
    )
    .use(middleware())
}
