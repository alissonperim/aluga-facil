import { Customer } from '@entities/customer'

export interface IListCustomersRepository {
  list(): Promise<Customer[]>
}
