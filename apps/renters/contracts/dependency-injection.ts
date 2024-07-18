import { CreateRenterRepository, GetRenterRepository } from '@renters/repositories'
import { ICreateRenterRepository, IGetRenterRepository } from '@renters/repositories/contracts'
import { CreateRenterUseCase, GetRenterUseCase } from '@renters/usecases'
import { ICreateRenterUseCase, IGetRenterUseCase } from '@renters/usecases/contracts'
import { container } from 'tsyringe'
export class RentersDependencyInjection {
  static execute() {
    // UseCases
    container.registerSingleton<ICreateRenterUseCase>('CreateRenterUseCase', CreateRenterUseCase)
    container.registerSingleton<IGetRenterUseCase>('GetRenterUseCase', GetRenterUseCase)

    // Repositories
    container.registerSingleton<ICreateRenterRepository>('CreateRenterReposistory', CreateRenterRepository)
    container.registerSingleton<IGetRenterRepository>('GetRenterRepository', GetRenterRepository)
  }
}
