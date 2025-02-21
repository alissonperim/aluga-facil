import { MaritalStatus } from '@packages/types'
import { DOMAIN } from '@shared/utils'
import * as yup from 'yup'

export const updateCustomerSchema = yup
  .object()
  .shape({
    name: yup.string().notRequired().nullable(),
    lastName: yup.string().notRequired().nullable(),
    birthDate: yup.date().notRequired().nullable(),
    maritalStatus: yup.mixed<MaritalStatus>().oneOf(Object.values(MaritalStatus)).notRequired().nullable(),
    active: yup.boolean().optional().nullable(),
  })
  .noUnknown()

export const updateCustomerPathSchema = yup.object().shape({
  id: yup
    .string()
    .test('Is not a valid id', value => value.startsWith(DOMAIN.user))
    .required(),
})
