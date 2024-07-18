import { inject, injectable } from 'tsyringe'
import { IRenter } from '@packages/types'
import { IGetRenterUseCase } from './contracts/get-renter'
import { IGetRenterRepository } from '@renters/repositories/contracts'
import { renterDto } from '@renters/domain/renter-dto'

@injectable()
export class GetRenterUseCase implements IGetRenterUseCase {
  constructor(
    @inject('GetRenterRepository')
    private readonly repository: IGetRenterRepository,
  ) {}

  async execute(id: string): Promise<IRenter> {
    const renter = await this.repository.get(id)

    return renterDto(renter)
  }
}
