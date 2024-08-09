import { Owner } from '@entities/owner'
import { IOwner } from '@packages/types'
import { IListResponse } from '@shared/utils/list-response'

export const ownerDto = ({
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
  properties,
  propertiesIds,
  updatedAt,
  deletedAt,
}: Owner): IOwner => {
  return {
    id,
    name,
    email,
    birthDate,
    createdAt,
    document,
    lastName,
    properties,
    propertiesIds,
    maritalStatus,
    address,
    phoneNumber,
    updatedAt,
    deletedAt,
  }
}

export const listOwnersDto = (owners: Owner[]): IListResponse<IOwner> => {
  return {
    data: owners.map(ownerDto),
  }
}
