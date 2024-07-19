import * as yup from 'yup'

export const listRentersSchema = yup.object().shape({
  query: yup.object().shape({
    document: yup.string().optional().nullable(),
    email: yup.string().optional().nullable(),
    phoneNumber: yup.string().optional().nullable(),
  }),
})
