import * as yup from 'yup'

export const listLaboratoriesSchema = yup
  .object()
  .shape({
    document: yup.string().optional().nullable(),
    name: yup.string().optional().nullable(),
    fantasyName: yup.string().optional().nullable(),
  })
  .noUnknown('Unknown fields to list renters is not allowed')
