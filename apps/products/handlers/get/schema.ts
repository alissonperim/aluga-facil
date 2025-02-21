import { DOMAIN } from '@shared/utils'
import * as yup from 'yup'

export const getProductSchema = yup
  .object()
  .shape({
    id: yup
      .string()
      .test('Invalid id format', value => value.startsWith(DOMAIN.product))
      .required(),
  })
  .noUnknown('Unknown fields to list renters is not allowed')
