export class BaseException extends Error {
  constructor(
    readonly message: string,
    readonly statusCode: number,
    readonly code: string,
  ) {
    super(message)
    this.name = 'BaseException'
    this.statusCode = statusCode
    this.code = code
  }
}
