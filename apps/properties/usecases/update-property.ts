import { inject, injectable } from 'tsyringe'
import { IProperty } from '@packages/types'
import { DeepPartial } from 'typeorm'
import { IUpdatePropertyUseCase } from './contracts'
import { IUpdatePropertyRepository } from '@properties/repositories/contracts'
import { propertyDto } from '@properties/domain/property-dto'

@injectable()
export class UpdatePropertyUseCase implements IUpdatePropertyUseCase {
  constructor(
    @inject('UpdatePropertyRepository')
    private readonly repository: IUpdatePropertyRepository,
  ) {}

  async execute(id: string, data: DeepPartial<IProperty>): Promise<IProperty> {
    const property = await this.repository.update(id, data)

    return propertyDto(property)
  }
}
