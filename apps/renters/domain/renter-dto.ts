import { Renter as Entity } from '@entities/renter'
import { IRenter } from '@packages/types'

export const renterDto = ({
  id,
  name,
  lastName,
  phoneNumber,
  contracts,
  email,
  birthDate,
  address,
  fantasyName,
  document,
  isRealState,
  createdAt,
  updatedAt,
  deletedAt,
  addressId,
  contractsIds,
  rentProperties,
  rentPropertiesIds,
}: Entity): IRenter => {
  return {
    id,
    createdAt,
    updatedAt,
    deletedAt,
    name,
    lastName,
    phoneNumber,
    contracts,
    email,
    birthDate,
    address,
    fantasyName,
    document,
    isRealState,
    addressId,
    contractsIds,
    rentProperties,
    rentPropertiesIds,
  }
}
