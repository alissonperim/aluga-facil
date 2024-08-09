import { PropertyType } from '@packages/types'
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

export const createPropertySchema = yup.object().shape({
  address: addressSchema,
  ownersIds: yup.array().of(yup.string().required()).required(),
  renterId: yup.string().required(),
  type: yup.mixed<PropertyType>().oneOf(Object.values(PropertyType)).required(),
  dimension: yup.number().notRequired().nullable(),
  description: yup.string().notRequired().nullable(),
  rentalPrice: yup.number().required(),
  insuranceRequired: yup.boolean().required(),
  guarantorsRequired: yup.boolean().required(),
})
