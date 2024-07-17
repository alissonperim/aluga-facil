import { HttpResponses } from '@shared/http-responses'
import express, { Express } from 'express'

export const midiffy = (app: Express) => {
  app.use(express.json()).use(HttpResponses)
}
