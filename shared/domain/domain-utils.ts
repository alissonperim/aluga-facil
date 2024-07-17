import 'dotenv/config'
import { ulid } from 'ulid'

export const DOMAIN = {
  user: 'user_',
  address: 'addr_',
} as const

export const ulidGenerator = (domain: string): string => {
  return `${domain}${ulid()}`
}
