import { DOMAIN } from '@shared/utils'
import * as yup from 'yup'

export const listPropertiesSchema = yup
  .object()
  .shape({
    renter: yup
      .string()
      .test('Invalid property id', value => value.startsWith(DOMAIN.property))
      .optional(),
    owner: yup.string().optional(),
  })
  .noUnknown('Unknown fields to list renters is not allowed')
