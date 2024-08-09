import {
  CreatePropertyRepository,
  GetPropertyRepository,
  ListPropertiesRepository,
  UpdatePropertyRepository,
} from '@properties/repositories'
import {
  ICreatePropertyRepository,
  IGetPropertyRepository,
  IListPropertiesRepository,
  IUpdatePropertyRepository,
} from '@properties/repositories/contracts'
import {
  CreatePropertyUseCase,
  GetPropertyUseCase,
  ListPropertiesUseCase,
  UpdatePropertyUseCase,
} from '@properties/usecases'
import {
  ICreatePropertyUseCase,
  IGetPropertyUseCase,
  IListPropertiesUseCase,
  IUpdatePropertyUseCase,
} from '@properties/usecases/contracts'
import { container } from 'tsyringe'

export class RentersDependencyInjection {
  static execute() {
    // UseCases
    container.registerSingleton<ICreatePropertyUseCase>('CreatePropertyUseCase', CreatePropertyUseCase)
    container.registerSingleton<IGetPropertyUseCase>('GetPropertyUseCase', GetPropertyUseCase)
    container.registerSingleton<IListPropertiesUseCase>('ListPropertysUseCase', ListPropertiesUseCase)
    container.registerSingleton<IUpdatePropertyUseCase>('UpdatePropertyUseCase', UpdatePropertyUseCase)

    // Repositories
    container.registerSingleton<ICreatePropertyRepository>('CreatePropertyReposistory', CreatePropertyRepository)
    container.registerSingleton<IGetPropertyRepository>('GetPropertyRepository', GetPropertyRepository)
    container.registerSingleton<IListPropertiesRepository>('ListPropertysRepository', ListPropertiesRepository)
    container.registerSingleton<IUpdatePropertyRepository>('UpdatePropertyRepository', UpdatePropertyRepository)
  }
}
