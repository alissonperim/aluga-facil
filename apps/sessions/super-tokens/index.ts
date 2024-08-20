import 'dotenv/config'
import Session from 'supertokens-node/recipe/session'
import Passwordless from 'supertokens-node/recipe/passwordless'
import { TypeInput } from 'supertokens-node/lib/build/types'

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
    Passwordless.init({
      flowType: 'USER_INPUT_CODE',
      contactMethod: 'EMAIL_OR_PHONE',
    }),
    Session.init(), // initializes session features
  ],
} as TypeInput
