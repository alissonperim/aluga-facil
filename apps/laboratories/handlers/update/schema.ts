import { DOMAIN } from '@shared/utils'
import * as yup from 'yup'

const addressSchema = yup
  .object()
  .shape({
    street: yup.string(),
    number: yup.string(),
    neighborhood: yup.string(),
    city: yup.string(),
    state: yup.string(),
    country: yup.string(),
    zipCode: yup.string(),
    complement: yup.string(),
  })
  .noUnknown()

export const updateLaboratorySchema = yup
  .object()
  .shape({
    name: yup.string(),
    fantasyName: yup.string(),
    document: yup.date(),
    address: addressSchema,
  })
  .noUnknown()

export const updateLaboratoryPathSchema = yup.object().shape({
  id: yup
    .string()
    .test('Is not a valid id', value => value.startsWith(DOMAIN.laboratory))
    .required(),
})
