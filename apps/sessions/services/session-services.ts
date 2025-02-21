import { RequesterRepository } from '@shared/repository'
import { ExpressRequest } from 'supertokens-node/lib/build/framework/express/framework'

export const userSession = async (request: ExpressRequest) => {
  const userEmail = await request.getFormData()
  console.log('WHAT THE HELL IS ON THIS', userEmail)

  if (!userEmail) throw new Error('Customer not found')

  const requester = new RequesterRepository()

  const user = await requester.get('http://localhost:3333/v1/customers', userEmail)

  console.log('WHAT THE HELL IS ON THIS USER', user)

  return user
}
