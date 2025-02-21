import {
  CreateLaboratoryRepository,
  ListLaboratoriesRepository,
  GetLaboratoryRepository,
  UpdateLaboratoryRepository,
} from '@laboratories/repositories'
import {
  ICreateLaboratoryRepository,
  IGetLaboratoryRepository,
  IListLaboratoriesRepository,
  IUpdateLaboratoryRepository,
} from '@laboratories/repositories/contracts'
import {
  ListLaboratoriesUseCase,
  GetLaboratoryUseCase,
  UpdateLaboratoryUseCase,
  CreateLaboratoryUseCase,
} from '@laboratories/usecases'
import {
  ICreateLaboratoryUseCase,
  IListLaboratoriesUseCase,
  IGetLaboratoryUseCase,
  IUpdateLaboratoryUseCase,
} from '@laboratories/usecases/contracts'
import { container } from 'tsyringe'

export class LaboratoriesDependencyInjection {
  static execute() {
    // UseCases
    container.registerSingleton<ICreateLaboratoryUseCase>('CreateLaboratoryUseCase', CreateLaboratoryUseCase)
    container.registerSingleton<IListLaboratoriesUseCase>('ListLaboratoriesUseCase', ListLaboratoriesUseCase)
    container.registerSingleton<IGetLaboratoryUseCase>('GetLaboratoryUseCase', GetLaboratoryUseCase)
    container.registerSingleton<IUpdateLaboratoryUseCase>('UpdateLaboratoryUseCase', UpdateLaboratoryUseCase)

    // Repositories
    container.registerSingleton<ICreateLaboratoryRepository>('CreateLaboratoryRepository', CreateLaboratoryRepository)
    container.registerSingleton<IListLaboratoriesRepository>('ListLaboratoriesRepository', ListLaboratoriesRepository)
    container.registerSingleton<IGetLaboratoryRepository>('GetLaboratoryRepository', GetLaboratoryRepository)
    container.registerSingleton<IUpdateLaboratoryRepository>('UpdateLaboratoryRepository', UpdateLaboratoryRepository)
  }
}
