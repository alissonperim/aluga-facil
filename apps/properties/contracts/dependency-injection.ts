import {
  CreateRenterRepository,
  GetRenterRepository,
  ListRentersRepository,
  UpdateRenterRepository,
} from '@renters/repositories'
import {
  ICreateRenterRepository,
  IGetRenterRepository,
  IListRentersRepository,
  IUpdateRenterRepository,
} from '@renters/repositories/contracts'
import { CreateRenterUseCase, GetRenterUseCase, ListRentersUseCase, UpdateRenterUseCase } from '@renters/usecases'
import {
  ICreateRenterUseCase,
  IGetRenterUseCase,
  IListRentersUseCase,
  IUpdateRenterUseCase,
} from '@renters/usecases/contracts'
import { container } from 'tsyringe'

export class RentersDependencyInjection {
  static execute() {
    // UseCases
    container.registerSingleton<ICreateRenterUseCase>('CreateRenterUseCase', CreateRenterUseCase)
    container.registerSingleton<IGetRenterUseCase>('GetRenterUseCase', GetRenterUseCase)
    container.registerSingleton<IListRentersUseCase>('ListRentersUseCase', ListRentersUseCase)
    container.registerSingleton<IUpdateRenterUseCase>('UpdateRenterUseCase', UpdateRenterUseCase)

    // Repositories
    container.registerSingleton<ICreateRenterRepository>('CreateRenterReposistory', CreateRenterRepository)
    container.registerSingleton<IGetRenterRepository>('GetRenterRepository', GetRenterRepository)
    container.registerSingleton<IListRentersRepository>('ListRentersRepository', ListRentersRepository)
    container.registerSingleton<IUpdateRenterRepository>('UpdateRenterRepository', UpdateRenterRepository)
  }
}
