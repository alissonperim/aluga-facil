import { Customer } from '@entities/customer'

export interface IGetCustomerRepository {
  get(id: string): Promise<Customer>
}
