/**
 * IN_TERM, pagamento por crediário,
 * AGREEMENT, pagamento por convênio
 */
export enum SaleType {
  CASH = 'cash',
  IN_TERM = 'in_term',
  AGREEMENT = 'agreement',
}

export enum PaymentType {
  MONEY = 'money',
  CREDIT_CARD = 'credit_card',
  DEBIT_CARD = 'debit_card',
  PIX = 'pix',
}
