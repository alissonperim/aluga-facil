import { ICustomer } from '@packages/types'
import { DeepPartial } from 'typeorm'

export interface IUpdateCustomerUseCase {
  execute(id: string, data: DeepPartial<ICustomer>): Promise<ICustomer>
}
