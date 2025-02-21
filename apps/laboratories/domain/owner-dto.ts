import { Laboratory } from '@entities/laboratory'
import { ILaboratory } from '@packages/types'

export const laboratoryDto = ({
  id,
  name,
  address,
  createdAt,
  fantasyName,
  document,
  isActive,
  updatedAt,
  deletedAt,
}: Laboratory): ILaboratory => {
  return {
    id,
    name,
    isActive,
    createdAt,
    document,
    address,
    fantasyName,
    updatedAt,
    deletedAt,
  }
}
