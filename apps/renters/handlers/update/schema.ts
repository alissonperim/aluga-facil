import { MaritalStatus } from '@packages/types'
import { DOMAIN } from '@shared/utils'
import * as yup from 'yup';

export const updateUserSchema = yup.object().shape({
    name: yup.string().notRequired().nullable(),
    lastName: yup.string().notRequired().nullable(),
    birthDate: yup.date().notRequired().nullable(),
    maritalStatus: yup.mixed<MaritalStatus>().oneOf(Object.values(MaritalStatus)).notRequired().nullable(),
}).noUnknown()

export const updateUserPathSchema = yup.object().shape({
    id: yup.string().test('Is not a valid id', value => value.startsWith(DOMAIN.user)).required()
})
