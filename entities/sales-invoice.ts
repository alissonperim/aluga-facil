import { Entity } from 'typeorm'
import { Base } from './base'

@Entity('sales_invoice')
export class SalesInvoice extends Base {}
