import { MaritalStatus } from '@packages/types'
import * as yup from 'yup'

const addressSchema = yup.object().shape({
    street: yup.string().required(),
    number: yup.string().required(),
    neighborhood: yup.string().required(),
    city: yup.string().required(),
    state: yup.string().required(),
    country: yup.string().required(),
    zipCode: yup.string().required(),
    complement: yup.string().notRequired().nullable(),
}).noUnknown()

export const createUserSchema = yup.object().shape({
    email: yup.string().email().required(),
    name: yup.string().required(),
    lastName: yup.string().required(),
    phoneNumber: yup.string().required().min(11).max(14),
    birthDate: yup.date().nullable(),
    maritalStatus: yup.mixed<MaritalStatus>().oneOf(Object.values(MaritalStatus)).required(),
    document: yup.string().required().min(11).max(11),
    address: addressSchema
}).noUnknown()
