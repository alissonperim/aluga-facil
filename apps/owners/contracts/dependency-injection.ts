import {
  CreateOwnerRepository,
  ListOwnersRepository,
  GetOwnerRepository,
  UpdateOwnerRepository,
} from '@owners/repositories'
import {
  ICreateOwnerRepository,
  IListOwnersRepository,
  IGetOwnerRepository,
  IUpdateOwnerRepository,
} from '@owners/repositories/contracts'
import { CreateOwnerUseCase, ListOwnersUseCase, GetOwnerUseCase, UpdateOwnerUseCase } from '@owners/usecases'
import {
  ICreateOwnerUseCase,
  IListOwnersUseCase,
  IGetOwnerUseCase,
  IUpdateOwnerUseCase,
} from '@owners/usecases/contracts'
import { container } from 'tsyringe'

export class UsersDependencyInjection {
  static execute() {
    // UseCases
    container.registerSingleton<ICreateOwnerUseCase>('CreateOwnerUseCase', CreateOwnerUseCase)
    container.registerSingleton<IListOwnersUseCase>('ListOwnersUseCase', ListOwnersUseCase)
    container.registerSingleton<IGetOwnerUseCase>('GetOwnerUseCase', GetOwnerUseCase)
    container.registerSingleton<IUpdateOwnerUseCase>('UpdateOwnerUseCase', UpdateOwnerUseCase)

    // Repositories
    container.registerSingleton<ICreateOwnerRepository>('CreateOwnerRepository', CreateOwnerRepository)
    container.registerSingleton<IListOwnersRepository>('ListOwnersRepository', ListOwnersRepository)
    container.registerSingleton<IGetOwnerRepository>('GetOwnerRepository', GetOwnerRepository)
    container.registerSingleton<IUpdateOwnerRepository>('UpdateOwnerRepository', UpdateOwnerRepository)
  }
}
