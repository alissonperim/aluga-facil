import { MaritalStatus } from '@packages/types'
import * as yup from 'yup'

const addressSchema = yup
  .object()
  .shape({
    street: yup.string().required(),
    number: yup.string().required(),
    neighborhood: yup.string().required(),
    city: yup.string().required(),
    state: yup.string().required(),
    country: yup.string().required(),
    zipCode: yup.string().required(),
    complement: yup.string().notRequired().nullable(),
  })
  .noUnknown()

export const createRenterSchema = yup
  .object()
  .shape({
    email: yup.string().email().required(),
    name: yup.string().when('isRealState', {
      is: false,
      then: () => yup.string().required(),
      otherwise: () => yup.string().notRequired().nullable().default(undefined),
    }),
    lastName: yup.string().when('isRealState', {
      is: false,
      then: () => yup.string().required(),
      otherwise: () => yup.string().notRequired().nullable().default(undefined),
    }),
    phoneNumber: yup.string().required().min(11).max(14),
    birthDate: yup.date().nullable(),
    maritalStatus: yup
      .mixed<MaritalStatus>()
      .oneOf(Object.values(MaritalStatus))
      .when('isRealState', {
        is: false,
        then: () => yup.mixed<MaritalStatus>().oneOf(Object.values(MaritalStatus)).required(),
        otherwise: () =>
          yup.mixed<MaritalStatus>().oneOf(Object.values(MaritalStatus)).notRequired().nullable().default(undefined),
      }),
    document: yup.string().required().min(11).max(11),
    address: addressSchema,
  })
  .noUnknown()
