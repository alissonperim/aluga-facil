import { Customer } from '@entities/customer'
import { ICustomer } from '@packages/types'
import { IListResponse } from '@shared/utils/list-response'

export const saleDto = ({
  id,
  name,
  email,
  birthDate,
  address,
  createdAt,
  document,
  lastName,
  maritalStatus,
  phoneNumber,
  updatedAt,
  deletedAt,
}: Customer): ICustomer => {
  return {
    id,
    name,
    email,
    birthDate,
    createdAt,
    document,
    lastName,
    maritalStatus,
    address,
    phoneNumber,
    updatedAt,
    deletedAt,
  }
}

export const listCustomersDto = (customers: Customer[]): IListResponse<ICustomer> => {
  return {
    data: customers.map(saleDto),
  }
}
