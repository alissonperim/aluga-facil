import { CreateRenterRepository, GetRenterRepository, ListRentersRepository } from '@renters/repositories'
import { ICreateRenterRepository, IGetRenterRepository, IListRentersRepository } from '@renters/repositories/contracts'
import { CreateRenterUseCase, GetRenterUseCase, ListRentersUseCase } from '@renters/usecases'
import { ICreateRenterUseCase, IGetRenterUseCase, IListRentersUseCase } from '@renters/usecases/contracts'
import { container } from 'tsyringe'

export class RentersDependencyInjection {
  static execute() {
    // UseCases
    container.registerSingleton<ICreateRenterUseCase>('CreateRenterUseCase', CreateRenterUseCase)
    container.registerSingleton<IGetRenterUseCase>('GetRenterUseCase', GetRenterUseCase)
    container.registerSingleton<IListRentersUseCase>('ListRentersUseCase', ListRentersUseCase)

    // Repositories
    container.registerSingleton<ICreateRenterRepository>('CreateRenterReposistory', CreateRenterRepository)
    container.registerSingleton<IGetRenterRepository>('GetRenterRepository', GetRenterRepository)
    container.registerSingleton<IListRentersRepository>('ListRentersRepository', ListRentersRepository)
  }
}
