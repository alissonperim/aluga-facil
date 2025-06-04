import { Customer } from '@entities/customer'
import { DeepPartial } from 'typeorm'

export interface IUpdateCustomerRepository {
  update(id: string, data: DeepPartial<Customer>): Promise<Customer>
}
