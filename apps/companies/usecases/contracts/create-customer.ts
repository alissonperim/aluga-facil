import { ICustomer } from '@packages/types'
import { ICreateCustomer } from '@customers/contracts'

export interface ICreateCustomerUseCase {
  execute(data: ICreateCustomer): Promise<ICustomer>
}
