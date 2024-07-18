import { inject, injectable } from 'tsyringe'
import { ICreateRenterUseCase } from './contracts/create-renter'
import { ICreateRenterRepository } from '../repositories/contracts'
import { ICreateRenter } from '../contracts'
import { IRenter } from '@packages/types'
import { renterDto } from '../domain/renter-dto'

@injectable()
export class CreateRenterUseCase implements ICreateRenterUseCase {
  constructor(
    @inject('CreateRenterReposistory')
    private readonly repository: ICreateRenterRepository,
  ) {}

  async execute(data: ICreateRenter): Promise<IRenter> {
    const renter = await this.repository.create(data)

    return renterDto(renter)
  }
}
