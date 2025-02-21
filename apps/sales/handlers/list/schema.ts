import * as yup from 'yup'

export const listCustomersQueryStringParameters = yup.object().shape({
  name: yup.string().max(256),
  document: yup.string().length(11),
  email: yup.string().email(),
})
