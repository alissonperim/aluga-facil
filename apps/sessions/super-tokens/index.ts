import 'dotenv/config'
import Session from 'supertokens-node/recipe/session'
import EmailPassword from 'supertokens-node/recipe/emailpassword'
import { TypeInput } from 'supertokens-node/lib/build/types'
import EmailVerification from 'supertokens-node/recipe/emailverification'
import { EmailVerificationClaim } from 'supertokens-node/recipe/emailverification'
import Dashboard from 'supertokens-node/recipe/dashboard'
import jwt from 'supertokens-node/recipe/jwt'
import SuperTokens from 'supertokens-node'
import { Logger } from '@shared/logger'

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
    appName: 'a-z-pharma',
    apiDomain: 'http://localhost:3333',
    websiteDomain: 'http://localhost:3000',
    apiBasePath: '/v1/auth',
  },
  recipeList: [
    jwt.init(),
    EmailPassword.init({
      override: {
        // apis: originalImplementation => {
        //   return {
        //     ...originalImplementation,
        //     signInPOST: async input => {
        //       const response = await originalImplementation.signInPOST(input)

        //       console.log('response', response)

        //       return response
        //     },
        //   }
        // },
        functions: originalImplementation => {
          return {
            ...originalImplementation,
            signUp: async input => {
              // First we call the original implementation of signUp.
              let response = await originalImplementation.signUp(input)
              // Post sign up response, we check if it was successful
              if (response.status === 'OK' && response.user.loginMethods.length === 1 && input.session === undefined) {
                /**
                 *
                 * response.user contains the following info:
                 * - emails
                 * - id
                 * - timeJoined
                 * - tenantIds
                 * - phone numbers
                 * - third party login info
                 * - all the login methods associated with this user.
                 * - information about if the user's email is verified or not.
                 *
                 */
                // TODO: post sign up logic
              }
              return response
            },
            signIn: async input => {
              // First we call the original implementation of signIn.
              console.log('Bateu aqui?')
              let response = await originalImplementation.signIn(input)
              Logger.info('Response', response)
              // Post sign up response, we check if it was successful
              if (response.status === 'OK') {
                /**
                 *
                 * response.user contains the following info:
                 * - emails
                 * - id
                 * - timeJoined
                 * - tenantIds
                 * - phone numbers
                 * - third party login info
                 * - all the login methods associated with this user.
                 * - information about if the user's email is verified or not.
                 *
                 */
                // TODO: post sign in logic
              }
              return response
            },
          }
        },
      },
    }),
    EmailVerification.init({
      mode: 'REQUIRED',
    }),
    Session.init({
      override: {
        functions: function (originalImplementation) {
          return {
            ...originalImplementation,
            createNewSession: async function (input) {
              const userId = input.userId
              const user = await SuperTokens.getCustomer(input.userId, input.userContext)

              console.log('USERRRRRRRRRRRRRRRRRRR', user)

              input.accessTokenPayload = {
                ...input.accessTokenPayload,
                ...(await EmailVerificationClaim.build(
                  userId,
                  input.recipeCustomerId,
                  input.tenantId,
                  input.accessTokenPayload,
                  input.accessTokenPayload,
                )),
              }
              return originalImplementation.createNewSession(input)
            },
          }
        },
      },
    }),
    Dashboard.init(),
  ],
} as TypeInput
