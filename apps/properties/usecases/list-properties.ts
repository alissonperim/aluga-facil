import { IProperty } from '@packages/types'
import { inject, injectable } from 'tsyringe'
import { IListResponse } from '@shared/utils/list-response'
import { IListPropertiesUseCase } from './contracts'
import { IListPropertiesRepository } from '@properties/repositories/contracts'
import { IListPropertiesQueryStringParams } from '@properties/contracts/list-properties'
import { propertyDto } from '@properties/domain/property-dto'

@injectable()
export class ListPropertiesUseCase implements IListPropertiesUseCase {
  constructor(
    @inject('ListPropertiesRepository')
    private readonly repository: IListPropertiesRepository,
  ) {}
  async execute(params: IListPropertiesQueryStringParams): Promise<IListResponse<IProperty>> {
    const properties = await this.repository.list(params)

    return {
      data: properties.map(propertyDto),
    }
  }
}
