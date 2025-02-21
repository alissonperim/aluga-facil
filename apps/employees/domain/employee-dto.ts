import { Employee } from '@entities/employee'
import { IEmployee } from '@packages/types'

export const employeeDto = ({
  id,
  name,
  lastName,
  phoneNumber,
  email,
  birthDate,
  address,
  document,
  createdAt,
  updatedAt,
  deletedAt,
  addressId,
  role,
  isActive,
}: Employee): IEmployee => {
  return {
    id,
    createdAt,
    updatedAt,
    deletedAt,
    name,
    lastName,
    phoneNumber,
    email,
    birthDate,
    address,
    document,
    addressId,
    role,
    isActive,
  }
}
