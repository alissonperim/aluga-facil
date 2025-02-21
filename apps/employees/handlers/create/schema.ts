import { EmployeeRoleType } from '@packages/types'
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

export const createEmployeeSchema = yup
  .object()
  .shape({
    email: yup.string().email().required(),
    name: yup.string().required().max(124).min(3),
    lastName: yup.string().required().max(124).min(3),
    phoneNumber: yup.string().required().min(11).max(14),
    birthDate: yup.date().nullable(),
    document: yup.string().test('document-type', 'document must be a valid CPF', value => {
      return value.length === 11
    }),
    role: yup.mixed<EmployeeRoleType>().oneOf(Object.values(EmployeeRoleType)).required(),
    address: addressSchema,
    active: yup.boolean().required(),
    salary: yup.number().required(),
  })
  .required()
  .noUnknown()
