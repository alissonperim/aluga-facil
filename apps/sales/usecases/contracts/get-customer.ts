import { ICustomer } from '@packages/types'

export interface IGetCustomerUseCase {
  execute(id: string): Promise<ICustomer>
}
