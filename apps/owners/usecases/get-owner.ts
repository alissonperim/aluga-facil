import { inject, injectable } from 'tsyringe'
import { IOwner } from '@packages/types'
import { IGetOwnerUseCase } from './contracts'
import { ownerDto } from '@owners/domain/owner-dto'
import { IGetOwnerRepository } from '@owners/repositories/contracts'

@injectable()
export class GetOwnerUseCase implements IGetOwnerUseCase {
  constructor(
    @inject('GetOwnerRepository')
    private readonly repository: IGetOwnerRepository,
  ) {}

  async execute(id: string): Promise<IOwner> {
    const owner = await this.repository.get(id)

    return ownerDto(owner)
  }
}
