import { DiscountType, CommissionAmountType, MedicamentListType } from '@packages/types/product'
import { DOMAIN } from '@shared/utils'
import { regexDecimalValueTest } from '@shared/utils/validators'
import * as yup from 'yup'

export const updateProductSchema = yup
  .object()
  .shape({
    name: yup.string().length(256),
    barcode: yup.string().length(14),
    secondaryBarcode: yup.string().length(14).nullable(),
    salePricePmc: yup
      .number()
      .test('is-decimal', 'The salePricePmc should be a decimal value', value => regexDecimalValueTest(String(value))),
    purchasePrice: yup
      .number()
      .test('is-decimal', 'The purchasePrice should be a decimal value', value => regexDecimalValueTest(String(value))),
    factoryPrice: yup
      .number()
      .test('is-decimal', 'The factoryPrice should be a decimal value', value => regexDecimalValueTest(String(value))),
    discountType: yup.mixed<DiscountType>().oneOf(Object.values(DiscountType)),
    discount: yup.number().when('discountType', {
      is: DiscountType.static,
      then: schema => schema.integer('The discountType is static so the discount amount must be a decimal value'),
      otherwise: schema =>
        schema.test(
          'is-decimal',
          'The discountType is relative so the discount amount must be a decimal value',
          value => regexDecimalValueTest(String(value)),
        ),
    }),
    commissionAmountType: yup.mixed<CommissionAmountType>().oneOf(Object.values(CommissionAmountType)),
    commissionAmount: yup.number().when('comissionAmountType', {
      is: CommissionAmountType.static,
      then: schema =>
        schema.integer('The commissionAmountType is static so the discount amount must be a decimal value'),
      otherwise: schema =>
        schema.test(
          'is-decimal',
          'The commissionAmountType is relative so the discount amount must be a decimal value',
          value => regexDecimalValueTest(String(value)),
        ),
    }),
    expireAt: yup.date(),
    laboratoryId: yup.string().test('Invalid laboratory id format', value => value.startsWith(DOMAIN.laboratory)),
    stockAmount: yup.number().integer().positive().default(0),
    minStockAmount: yup.number().integer().positive(),
    maxStockAmount: yup.number().integer().positive(),
    terapeuticClassId: yup
      .string()
      .test('Invalid terapeutic class id format', value => value.startsWith(DOMAIN.terapeutic_class)),
    medicamentListTye: yup.mixed<MedicamentListType>().oneOf(Object.values(MedicamentListType)),
    icms: yup
      .number()
      .test('is-decimal', 'The icms must be a decimal value', value => regexDecimalValueTest(String(value))),
    medicamentPresentation: yup.string().length(256),
    purchaseUnity: yup.number().integer(),
    sellerUnity: yup.number().integer(),
    genericName: yup.string().length(256),
    hasGeneric: yup.boolean(),
  })
  .noUnknown('Unknown fields to list renters is not allowed')

export const updateProductPathSchema = yup.object().shape({
  id: yup.string().test('Invalid path parameter id format', value => value.startsWith(DOMAIN.product)),
})
