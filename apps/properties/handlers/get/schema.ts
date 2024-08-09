import { DOMAIN } from '@shared/utils'
import * as yup from 'yup'

export const getPropertySchema = yup.object().shape({
  id: yup
    .string()
    .test('Invalid id format', value => value.startsWith(DOMAIN.property))
    .required(),
})
