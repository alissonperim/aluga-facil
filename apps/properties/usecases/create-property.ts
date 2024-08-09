import 'dotenv/config'
import { inject, injectable } from 'tsyringe'
import { ICreatePropertyRepository } from '../repositories/contracts'
import { IOwner, IProperty, IRenter } from '@packages/types'
import { ICreatePropertyUseCase } from './contracts'
import { ICreateProperty } from '@properties/contracts/create-property'
import { propertyDto } from '@properties/domain/property-dto'
import { IRequesterRepository } from '@shared/repository/contracts'
import { CreateException } from '@shared/exceptions/create-exception'
import { Logger as logger } from '@shared/logger'

@injectable()
export class CreatePropertyUseCase implements ICreatePropertyUseCase {
  constructor(
    @inject('CreatePropertyRepository')
    private readonly repository: ICreatePropertyRepository,
    @inject('RequesterRepository')
    private readonly requester: IRequesterRepository,

    private readonly URL: string = process.env.URL,
  ) {}

  async execute(data: ICreateProperty): Promise<IProperty> {
    const { ownersIds, renterId } = data

    const [owners, renter] = await Promise.all([this.getOwners(ownersIds), this.getRenter(renterId)])

    if (!owners.length || owners.length !== ownersIds.length) {
      logger.error('Owners not found', { ownersIds })
      throw new CreateException('Owners not found')
    }

    if (!renter) {
      logger.error('Renter not found', { renterId })
      throw new CreateException('Renter not found')
    }

    const property = await this.repository.create(data)

    return propertyDto(property)
  }

  async getOwners(ownersIds: string[]): Promise<IOwner[]> {
    return Promise.all(
      ownersIds.map(async (id: string) => {
        return this.requester.get<IOwner>(`${this.URL}/owners`, id)
      }),
    )
  }

  async getRenter(renterId: string): Promise<IRenter> {
    return this.requester.get<IRenter>(`${this.URL}/renters`, renterId)
  }
}
