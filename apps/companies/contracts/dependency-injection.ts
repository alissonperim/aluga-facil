import {
  CreateCustomerRepository,
  GetCustomerRepository,
  ListCustomersRepository,
  UpdateCustomerRepository,
} from '@customers/repositories'
import {
  ICreateCustomerRepository,
  IGetCustomerRepository,
  IListCustomersRepository,
  IUpdateCustomerRepository,
} from '@customers/repositories/contracts'
import { CreateCustomerUseCase } from '@customers/usecases/create-customer'
import { ICreateCustomerUseCase } from '@customers/usecases/contracts/create-customer'
import { container } from 'tsyringe'
import { IGetCustomerUseCase, IListCustomersUseCase, IUpdateCustomerUseCase } from '@customers/usecases/contracts'
import { ListCustomersUseCase } from '@customers/usecases/list-customers'
import { GetCustomerUseCase, UpdateCustomerUseCase } from '@customers/usecases'

export class CustomersDependencyInjection {
  static execute() {
    // UseCases
    container.registerSingleton<ICreateCustomerUseCase>('CreateCustomerUseCase', CreateCustomerUseCase)
    container.registerSingleton<IListCustomersUseCase>('ListCustomersUseCase', ListCustomersUseCase)
    container.registerSingleton<IGetCustomerUseCase>('GetCustomerUseCase', GetCustomerUseCase)
    container.registerSingleton<IUpdateCustomerUseCase>('UpdateCustomerUseCase', UpdateCustomerUseCase)

    // Repositories
    container.registerSingleton<ICreateCustomerRepository>('CreateCustomerRepository', CreateCustomerRepository)
    container.registerSingleton<IListCustomersRepository>('ListCustomersRepository', ListCustomersRepository)
    container.registerSingleton<IGetCustomerRepository>('GetCustomerRepository', GetCustomerRepository)
    container.registerSingleton<IUpdateCustomerRepository>('UpdateCustomerRepository', UpdateCustomerRepository)
  }
}
