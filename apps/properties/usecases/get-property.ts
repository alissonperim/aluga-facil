import { inject, injectable } from 'tsyringe'
import { IProperty } from '@packages/types'
import { IGetPropertyUseCase } from './contracts'
import { IGetPropertyRepository } from '@properties/repositories/contracts'
import { propertyDto } from '@properties/domain/property-dto'

@injectable()
export class GetPropertyUseCase implements IGetPropertyUseCase {
  constructor(
    @inject('GetPropertyRepository')
    private readonly repository: IGetPropertyRepository,
  ) {}

  async execute(id: string): Promise<IProperty> {
    const property = await this.repository.get(id)

    return propertyDto(property)
  }
}
