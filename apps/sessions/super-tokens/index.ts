import 'dotenv/config'
import Session, { createJWT } from 'supertokens-node/recipe/session'
import Passwordless from 'supertokens-node/recipe/passwordless'
import { TypeInput } from 'supertokens-node/lib/build/types'
import EmailVerification from 'supertokens-node/recipe/emailverification'
import { EmailVerificationClaim } from 'supertokens-node/recipe/emailverification'
import Dashboard from 'supertokens-node/recipe/dashboard'
import jwt from 'supertokens-node/recipe/jwt'
import SuperTokens from 'supertokens-node'

const { SUPER_TOKENS_URI, SUPER_TOKENS_API_KEY } = process.env

export default {
  framework: 'express',
  supertokens: {
    // https://try.supertokens.com is for demo purposes. Replace this with the address of your core instance (sign up on supertokens.com), or self host a core.
    connectionURI: SUPER_TOKENS_URI,
    apiKey: SUPER_TOKENS_API_KEY,
  },
  appInfo: {
    // learn more about this on https://supertokens.com/docs/session/appinfo
    appName: 'aluga-facil',
    apiDomain: 'http://localhost:3333',
    websiteDomain: 'http://localhost:3333',
    apiBasePath: '/auth',
    websiteBasePath: '/v1/auth',
  },
  recipeList: [
    jwt.init(),
    Passwordless.init({
      flowType: 'USER_INPUT_CODE',
      contactMethod: 'EMAIL_OR_PHONE',
    }),
    EmailVerification.init({
      mode: 'REQUIRED',
    }),
    Session.init({
      exposeAccessTokenToFrontendInCookieBasedAuth: true,
      override: {
        functions: function (originalImplementation) {
          return {
            ...originalImplementation,
            createNewSession: async function (input) {
              const userId = input.userId
              const request = SuperTokens.getRequestFromUserContext(input.userContext)
              const user = await SuperTokens.getUser(input.userId, input.userContext)

              console.log('USERRRRRRRRRRRRRRRRRRR', user)

              let jwt: string | undefined
              let jwtPayload = {}

              if (request !== undefined) {
                jwt = request.getCookieValue('jwt')
              }

              if (jwt !== undefined) {
                console.log('JWT', jwt)
                jwtPayload = {
                  'X-Supertokens-Jwt': jwt,
                }
              }

              input.accessTokenPayload = {
                ...input.accessTokenPayload,
                ...(await EmailVerificationClaim.build(
                  userId,
                  input.recipeUserId,
                  input.tenantId,
                  input.accessTokenPayload,
                  input.accessTokenPayload,
                )),
                ...jwtPayload,
              }

              console.log('INPUT ACCESSTOKENPAYLOAD', input.accessTokenPayload)

              //await userSession(input.userContext)

              return originalImplementation.createNewSession(input)
            },
          }
        },
      },
    }),
    Dashboard.init(),
  ],
} as TypeInput
