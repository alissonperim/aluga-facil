import { IHttpResponse } from '@shared/httpResponses'

declare global {
  namespace Express {
    export interface Response {
      ok: (data: unknown) => void
      created: (data: unknown) => void
      error: (err: Error) => void
    }
  }
}
