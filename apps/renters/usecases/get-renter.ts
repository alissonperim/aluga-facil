import { inject, injectable } from 'tsyringe'
import { IRenter } from '@packages/types'
import { IGetRenterUseCase } from './contracts/get-renter'
import { IGetRenterRepository } from '../repositories/contracts'

@injectable()
export class GetRenterUseCase implements IGetRenterUseCase {
  constructor(
    @inject('GetRenterRepository')
    private readonly repository: IGetRenterRepository,
  ) {}

  async execute(id: string): Promise<IRenter> {
    const renter = await this.repository.get(id)

    return renter as IRenter
  }
}
