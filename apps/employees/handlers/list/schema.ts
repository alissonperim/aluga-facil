import * as yup from 'yup'

export const listEmployeesSchema = yup
  .object()
  .shape({
    document: yup.string().optional().nullable(),
    email: yup.string().optional().nullable(),
    phoneNumber: yup.string().optional().nullable(),
  })
  .noUnknown('Unknown fields to list renters is not allowed')
