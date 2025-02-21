import { inject, injectable } from 'tsyringe'
import { DeepPartial } from 'typeorm'
import { IUpdateLaboratoryUseCase } from './contracts'
import { IUpdateLaboratoryRepository } from '@laboratories/repositories/contracts'
import { ILaboratory } from '@packages/types'
import { laboratoryDto } from '@laboratories/domain/owner-dto'

@injectable()
export class UpdateLaboratoryUseCase implements IUpdateLaboratoryUseCase {
  constructor(
    @inject('UpdateLaboratoryRepository')
    private readonly repository: IUpdateLaboratoryRepository,
  ) {}

  async execute(id: string, data: DeepPartial<ILaboratory>): Promise<ILaboratory> {
    const user = await this.repository.update(id, data)

    return laboratoryDto(user)
  }
}
