import 'dotenv/config'
import { ulid } from 'ulid'

export const DOMAIN = {
  customer: 'cust_',
  sale: 'sale_',
  company: 'comp_',
  address: 'addr_',
  employee: 'empl',
  product: 'prod_',
  guarantor: 'guar_',
  laboratory: 'labo_',
  terapeutic_class: 'trpc_',
  delivery: 'dlvr_',
} as const

export const ulidGenerator = (domain: string): string => {
  return `${domain}${ulid()}`
}
