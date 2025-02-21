import { inject, injectable } from 'tsyringe'
import { ILaboratory } from '@packages/types'
import { IGetLaboratoryUseCase } from './contracts'
import { IGetLaboratoryRepository } from '@laboratories/repositories/contracts'
import { laboratoryDto } from '@laboratories/domain/owner-dto'

@injectable()
export class GetLaboratoryUseCase implements IGetLaboratoryUseCase {
  constructor(
    @inject('GetLaboratoryRepository')
    private readonly repository: IGetLaboratoryRepository,
  ) {}

  async execute(id: string): Promise<ILaboratory> {
    const owner = await this.repository.get(id)

    return laboratoryDto(owner)
  }
}
