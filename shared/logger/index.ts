import winston from 'winston'

export class Logger extends winston.Logger {
  private static logger: winston.Logger

  constructor() {
    super()
    Logger.logger = winston.createLogger({
      level: 'info',
      format: winston.format.json(),
      defaultMeta: { service: 'user-service' },
      transports: [
        new winston.transports.File({ filename: 'error.log', level: 'error' }),
        new winston.transports.File({ filename: 'combined.log' }),
      ],
    })

    if (process.env.NODE_ENV !== 'production') {
      Logger.logger.add(
        new winston.transports.Console({
          format: winston.format.simple(),
        }),
      )
    }
  }

  static info(message: string, args?: object) {
    this.logger.info(message, args)
  }

  static error(message: string, args?: object) {
    this.logger.error(message, args)
  }

  static warn(message: string, args?: object) {
    this.logger.warn(message, args)
  }
}
