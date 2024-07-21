import { MaritalStatus } from '@packages/types'
import { DOMAIN } from '@shared/utils'
import * as yup from 'yup'

export const updateRenterSchema = yup
  .object()
  .shape({
    name: yup.string().when('isRealState', {
      is: false,
      then: () => yup.string().notRequired().nullable(),
      otherwise: () => yup.string().notRequired().nullable().default(undefined),
    }),
    lastName: yup.string().when('isRealState', {
      is: false,
      then: () => yup.string().notRequired().nullable(),
      otherwise: () => yup.string().notRequired().nullable().default(undefined),
    }),
    birthDate: yup.date().nullable(),
    maritalStatus: yup
      .mixed<MaritalStatus>()
      .oneOf(Object.values(MaritalStatus))
      .when('isRealState', {
        is: false,
        then: () => yup.mixed<MaritalStatus>().oneOf(Object.values(MaritalStatus)).notRequired().nullable(),
        otherwise: () =>
          yup.mixed<MaritalStatus>().oneOf(Object.values(MaritalStatus)).notRequired().nullable().default(undefined),
      }),
    fantasyName: yup.string().when('isRealState', {
      is: false,
      then: () => yup.string().notRequired().nullable().default(undefined),
      otherwise: () => yup.string().notRequired().nullable(),
    }),
    isRealState: yup.boolean().notRequired().nullable(),
  })
  .required()
  .noUnknown(true, 'Unknown fields to update renter is not allowed')

export const updateRenterPathSchema = yup.object().shape({
  id: yup
    .string()
    .test('Is not a valid id', value => value.startsWith(DOMAIN.renter))
    .required(),
})
