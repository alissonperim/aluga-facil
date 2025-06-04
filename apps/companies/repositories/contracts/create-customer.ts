import { Customer } from '@entities/customer'
import { ICreateCustomer } from '@customers/contracts'

export interface ICreateCustomerRepository {
  create(data: ICreateCustomer): Promise<Customer>
}
