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

export const createLaboratorySchema = yup
  .object()
  .shape({
    name: yup.string().required(),
    fantasyName: yup.string(),
    document: yup.string().required().length(14),
    address: addressSchema,
  })
  .noUnknown()
