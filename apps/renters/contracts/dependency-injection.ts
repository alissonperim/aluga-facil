import { container } from 'tsyringe'
import { CreateRenterUseCase } from '../usecases/create-renter'
import { ICreateRenterUseCase } from '../usecases/contracts/create-renter'
import { ICreateRenterRepository } from '../repositories/contracts'
import { CreateRenterRepository } from '../repositories/create-renter'

export class RentersDependencyInjection {
  static execute() {
    // UseCases
    container.registerSingleton<ICreateRenterUseCase>('CreateRenterUseCase', CreateRenterUseCase)
    // Repositories
    container.registerSingleton<ICreateRenterRepository>('CreateRenterReposistory', CreateRenterRepository)
  }
}
