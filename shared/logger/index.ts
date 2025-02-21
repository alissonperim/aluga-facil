import winston from 'winston'

export class Logger extends winston.Logger {
  private static logger: winston.Logger = winston.createLogger({
    level: 'info',
    transports: [
      new winston.transports.File({ filename: 'error.log', level: 'error' }),
      new winston.transports.File({ filename: 'combined.log' }),
      new winston.transports.Console({
        format: winston.format.simple(),
      }),
    ],
  })

  constructor() {
    super()
  }

  static info(message: string, args?: object) {
    const stringArgs = JSON.stringify({ message, ...args })
    return this.logger.info(stringArgs)
  }

  static error(message: string, args?: object) {
    return this.logger.error(message, args)
  }

  static warn(message: string, args?: object) {
    return this.logger.warn(message, args)
  }
}
