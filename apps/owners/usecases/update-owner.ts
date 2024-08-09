import { inject, injectable } from 'tsyringe'
import { IOwner } from '@packages/types'
import { DeepPartial } from 'typeorm'
import { IUpdateOwnerUseCase } from './contracts'
import { IUpdateOwnerRepository } from '@owners/repositories/contracts'
import { ownerDto } from '@owners/domain/owner-dto'

@injectable()
export class UpdateOwnerUseCase implements IUpdateOwnerUseCase {
  constructor(
    @inject('UpdateOwnerRepository')
    private readonly repository: IUpdateOwnerRepository,
  ) {}

  async execute(id: string, data: DeepPartial<IOwner>): Promise<IOwner> {
    const user = await this.repository.update(id, data)

    return ownerDto(user)
  }
}
