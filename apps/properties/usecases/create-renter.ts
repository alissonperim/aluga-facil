import { inject, injectable } from 'tsyringe'
import { ICreatePropertyRepository } from '../repositories/contracts'
import { IProperty } from '@packages/types'
import { ICreatePropertyUseCase } from './contracts'
import { ICreateProperty } from '@properties/contracts/create-property'
import { propertyDto } from '@properties/domain/property-dto'

@injectable()
export class CreatePropertyUseCase implements ICreatePropertyUseCase {
  constructor(
    @inject('CreatePropertyRepository')
    private readonly repository: ICreatePropertyRepository,
  ) {}

  async execute(data: ICreateProperty): Promise<IProperty> {
    const property = await this.repository.create(data)

    return propertyDto(property)
  }
}
