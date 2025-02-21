import * as yup from 'yup'

export const listProductiesSchema = yup
  .object()
  .shape({
    name: yup.string(),
    limit: yup.number().default(100),
    genericName: yup.string().length(256),
  })
  .noUnknown('Unknown fields to list renters is not allowed')
