import { Property as Entity } from '@entities/property'
import { IProperty } from '@packages/types'

export const propertyDto = ({
  id,
  createdAt,
  updatedAt,
  deletedAt,
  addressId,
  address,
  contract,
  contractId,
  description,
  dimension,
  guarantorRequired,
  insuranceRequired,
  owners,
  ownersIds,
  rentalPrice,
  renter,
  renterId,
  type,
}: Entity): IProperty => {
  return {
    id,
    createdAt,
    updatedAt,
    deletedAt,
    addressId,
    address,
    contract,
    contractId,
    description,
    dimension,
    guarantorRequired,
    insuranceRequired,
    owners,
    ownersIds,
    rentalPrice,
    renter,
    renterId,
    type,
  }
}
