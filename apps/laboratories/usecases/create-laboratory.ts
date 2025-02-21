import { inject, injectable } from 'tsyringe'
import { Logger } from '@shared/logger'
import { ICreateLaboratoryUseCase } from './contracts'
import { ICreateLaboratoryRepository } from '@laboratories/repositories/contracts'
import { ICreateLaboratory } from '@laboratories/contracts'
import { ILaboratory } from '@packages/types'
import { laboratoryDto } from '@laboratories/domain/owner-dto'

@injectable()
export class CreateLaboratoryUseCase implements ICreateLaboratoryUseCase {
  constructor(
    @inject('CreateLaboratoryRepository')
    private readonly repository: ICreateLaboratoryRepository,
  ) {}

  async execute(data: ICreateLaboratory): Promise<ILaboratory> {
    Logger.info('Creating Laboratory', data)

    const laboratory = await this.repository.create(data)

    return laboratoryDto(laboratory)
  }
}
