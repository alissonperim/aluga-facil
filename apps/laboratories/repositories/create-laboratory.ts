import { Repository } from 'typeorm'
import { injectable } from 'tsyringe'
import { DataSourceSingleton } from '@infra/datasource-singleton'
import { CreateException } from '@shared/exceptions/create-exception'
import { ICreateLaboratoryRepository } from './contracts'
import { Laboratory } from '@entities/laboratory'
import { ICreateLaboratory } from '@laboratories/contracts'

@injectable()
export class CreateLaboratoryRepository implements ICreateLaboratoryRepository {
  private readonly context: Repository<Laboratory> = DataSourceSingleton.getRepositoy(Laboratory)
  async create(data: ICreateLaboratory): Promise<Laboratory> {
    const laboratory = this.context.create(data)

    const laboratoryExists = await this.context.find({
      where: [{ document: laboratory.document }],
    })

    if (laboratoryExists) throw new CreateException('Laboratory already exists')

    return this.context.save(laboratory)
  }
}
