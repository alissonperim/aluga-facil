import { BaseException } from './base-exception'

export class CreateException extends BaseException {
  constructor(message: string) {
    super(message, 400, 'CREATE_EXCEPTION')
  }
}
