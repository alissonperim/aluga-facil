import { BaseException } from './base-exception'

export class BadRequestException extends BaseException {
  constructor(message) {
    super(message, 400, 'BAD_REQUEST')
  }
}
