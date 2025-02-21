import { CommissionAmountType, DiscountType, MedicamentListType } from '@packages/types/product'
import { DOMAIN } from '@shared/utils'
import { regexDecimalValueTest } from '@shared/utils/validators'
import * as yup from 'yup'

export const createProductSchema = yup
  .object()
  .shape({
    name: yup.string().length(256).required(),
    barcode: yup.string().length(14).required(),
    secondaryBarcode: yup.string().length(14).nullable(),
    salePricePmc: yup
      .number()
      .test('is-decimal', 'The salePricePmc should be a decimal value', value => regexDecimalValueTest(String(value)))
      .required(),
    purchasePrice: yup
      .number()
      .test('is-decimal', 'The purchasePrice should be a decimal value', value => regexDecimalValueTest(String(value)))
      .required(),
    factoryPrice: yup
      .number()
      .test('is-decimal', 'The factoryPrice should be a decimal value', value => regexDecimalValueTest(String(value)))
      .required(),
    discountType: yup.mixed<DiscountType>().oneOf(Object.values(DiscountType)),
    discount: yup.number().when('discountType', {
      is: DiscountType.static,
      then: schema =>
        schema.integer('The discountType is static so the discount amount must be a decimal value').required(),
      otherwise: schema =>
        schema
          .test('is-decimal', 'The discountType is relative so the discount amount must be a decimal value', value =>
            regexDecimalValueTest(String(value)),
          )
          .required(),
    }),
    commissionAmountType: yup.mixed<CommissionAmountType>().oneOf(Object.values(CommissionAmountType)),
    commissionAmount: yup.number().when('comissionAmountType', {
      is: CommissionAmountType.static,
      then: schema =>
        schema.integer('The commissionAmountType is static so the discount amount must be a decimal value').required(),
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
      .test('Invalid terapeutic class id format', value => value.startsWith(DOMAIN.terapeutic_class))
      .required(),
    medicamentListTye: yup.mixed<MedicamentListType>().oneOf(Object.values(MedicamentListType)),
    icms: yup
      .number()
      .test('is-decimal', 'The icms must be a decimal value', value => regexDecimalValueTest(String(value)))
      .required(),
    medicamentPresentation: yup.string().length(256),
    purchaseUnity: yup.number().integer().required(),
    sellerUnity: yup.number().integer().required(),
    genericName: yup.string().length(256),
    hasGeneric: yup.boolean().default(false),
  })
  .noUnknown('Unknown fields to list renters is not allowed')
