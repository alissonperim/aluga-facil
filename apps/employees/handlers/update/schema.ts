import { EmployeeRoleType } from '@packages/types'
import { DOMAIN } from '@shared/utils'
import * as yup from 'yup'

export const updateEmployeeSchema = yup
  .object()
  .shape({
    name: yup.string().nullable().optional(),
    lastName: yup.string().nullable().optional(),
    birthDate: yup.date().nullable().optional(),
    active: yup.boolean().nullable().optional(),
    salary: yup.number().nullable().optional(),
    role: yup.mixed<EmployeeRoleType>().oneOf(Object.values(EmployeeRoleType)).optional(),
  })
  .required()
  .noUnknown(true, 'Unknown fields to update employee is not allowed')

export const updateEmployeePathSchema = yup.object().shape({
  id: yup
    .string()
    .test('Is not a valid id', value => value.startsWith(DOMAIN.employee))
    .required(),
})
