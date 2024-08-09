import { PropertyType } from '@packages/types'
import { DOMAIN } from '@shared/utils'
import * as yup from 'yup'

export const updatePropertySchema = yup.object().shape({
  addressId: yup
    .string()
    .test('Is not a valid id', value => value.startsWith(DOMAIN.address))
    .optional(),
  ownersIds: yup.array().of(yup.string().required()).optional(),
  type: yup.mixed<PropertyType>().oneOf(Object.values(PropertyType)).optional(),
  dimension: yup.number().notRequired().nullable(),
  description: yup.string().notRequired().nullable(),
  rentalPrice: yup.number().optional(),
  insuranceRequired: yup.boolean().optional(),
  guarantorsRequired: yup.boolean().optional(),
})

export const updatePropertyPathSchema = yup.object().shape({
  id: yup
    .string()
    .test('Is not a valid id', value => value.startsWith(DOMAIN.renter))
    .required(),
})
