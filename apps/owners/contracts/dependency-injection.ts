import { CreateUserRepository, GetUserRepository, ListUsersRepository, UpdateUserRepository } from '@users/repositories'
import {
  ICreateUserRepository,
  IGetUserRepository,
  IListUsersRepository,
  IUpdateUserRepository,
} from '@users/repositories/contracts'
import { CreateUserUseCase } from '@users/usecases/create-user'
import { ICreateUserUseCase } from '@users/usecases/contracts/create-user'
import { container } from 'tsyringe'
import { IGetUserUseCase, IListUsersUseCase, IUpdateUserUseCase } from '@users/usecases/contracts'
import { ListUsersUseCase } from '@users/usecases/list-users'
import { GetUserUseCase, UpdateUserUseCase } from '@users/usecases'

export class UsersDependencyInjection {
  static execute() {
    // UseCases
    container.registerSingleton<ICreateUserUseCase>('CreateUserUseCase', CreateUserUseCase)
    container.registerSingleton<IListUsersUseCase>('ListUsersUseCase', ListUsersUseCase)
    container.registerSingleton<IGetUserUseCase>('GetUserUseCase', GetUserUseCase)
    container.registerSingleton<IUpdateUserUseCase>('UpdateUserUseCase', UpdateUserUseCase)

    // Repositories
    container.registerSingleton<ICreateUserRepository>('CreateUserRepository', CreateUserRepository)
    container.registerSingleton<IListUsersRepository>('ListUsersRepository', ListUsersRepository)
    container.registerSingleton<IGetUserRepository>('GetUserRepository', GetUserRepository)
    container.registerSingleton<IUpdateUserRepository>('UpdateUserRepository', UpdateUserRepository)
  }
}
