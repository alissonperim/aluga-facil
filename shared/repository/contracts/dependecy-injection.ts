import { container } from 'tsyringe'
import { IRequesterRepository } from '.'
import { RequesterRepository } from '..'

export class SharedRepositoryDependencyInjection {
  public static execute() {
    container.registerSingleton<IRequesterRepository>('RequesterRepository', RequesterRepository)
  }
}
