import { inject, injectable } from 'tsyringe'
import { ICreateRenterUseCase } from './contracts/create-renter'
import { ICreateRenterRepository } from '../repositories/contracts'
import { ICreateRenter } from '../contracts'
import { Renter } from '@entities/renter'

@injectable()
export class CreateRenterUseCase implements ICreateRenterUseCase {
  constructor(
    @inject('CreateRenterReposistory')
    private readonly repository: ICreateRenterRepository
  ) {}

  async execute(data: ICreateRenter): Promise<Renter> {
    return this.repository.create(data)
  }
}
