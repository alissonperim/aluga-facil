import * as yup from 'yup'

export const listPropertiesSchema = yup
  .object()
  .shape({
    renter: yup
      .string()
      .test('Invalid renter id', value => value.startsWith('rent_'))
      .optional(),
    owner: yup.string().optional(),
  })
  .noUnknown('Unknown fields to list renters is not allowed')
