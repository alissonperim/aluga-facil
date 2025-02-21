import {
  CreateEmployeeRepository,
  GetEmployeeRepository,
  ListEmployeesRepository,
  UpdateEmployeeRepository,
} from '@employees/repositories'
import {
  ICreateEmployeeRepository,
  IGetEmployeeRepository,
  IListEmployeesRepository,
  IUpdateEmployeeRepository,
} from '@employees/repositories/contracts'
import {
  CreateEmployeeUseCase,
  GetEmployeeUseCase,
  ListEmployeesUseCase,
  UpdateEmployeeUseCase,
} from '@employees/usecases'
import {
  ICreateEmployeeUseCase,
  IGetEmployeeUseCase,
  IListEmployeesUseCase,
  IUpdateEmployeeUseCase,
} from '@employees/usecases/contracts'
import { container } from 'tsyringe'

export class EmployeesDependencyInjection {
  static execute() {
    // UseCases
    container.registerSingleton<ICreateEmployeeUseCase>('CreateEmployeeUseCase', CreateEmployeeUseCase)
    container.registerSingleton<IGetEmployeeUseCase>('GetEmployeeUseCase', GetEmployeeUseCase)
    container.registerSingleton<IListEmployeesUseCase>('ListEmployeesUseCase', ListEmployeesUseCase)
    container.registerSingleton<IUpdateEmployeeUseCase>('UpdateEmployeeUseCase', UpdateEmployeeUseCase)

    // Repositories
    container.registerSingleton<ICreateEmployeeRepository>('CreateEmployeeReposistory', CreateEmployeeRepository)
    container.registerSingleton<IGetEmployeeRepository>('GetEmployeeRepository', GetEmployeeRepository)
    container.registerSingleton<IListEmployeesRepository>('ListEmployeesRepository', ListEmployeesRepository)
    container.registerSingleton<IUpdateEmployeeRepository>('UpdateEmployeeRepository', UpdateEmployeeRepository)
  }
}
