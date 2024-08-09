import { inject, injectable } from 'tsyringe'
import { ICreateOwnerUseCase } from './contracts/create-owner'
import { IOwner } from '@packages/types'
import { ICreateOwnerRepository } from '@owners/repositories/contracts'
import { ICreateOwner } from '@owners/contracts'
import { Logger } from '@shared/logger'
import { IRequesterRepository } from '@shared/repository/contracts'
import { CreateException } from '@shared/exceptions/create-exception'

@injectable()
export class CreateOwnerUseCase implements ICreateOwnerUseCase {
  constructor(
    @inject('CreateOwnerRepository')
    private readonly repository: ICreateOwnerRepository,
    @inject('RequesterRepository')
    private readonly requester: IRequesterRepository,
  ) {}

  async execute(data: ICreateOwner): Promise<IOwner> {
    const { propertiesIds } = data
    Logger.info('Creating owner', data)

    if (propertiesIds?.length) {
      const properties = await Promise.all(
        propertiesIds.map(async (pId: string) => await this.requester.get<IOwner[]>(`/properties`, pId)),
      )

      if (properties.length !== propertiesIds.length) {
        Logger.error('Properties not found', {
          propertiesIds,
          amountOfProperties: propertiesIds.length,
          amountOfPropertiesFound: properties.length,
        })

        throw new CreateException('Properties not found')
      }
    }
    return this.repository.create(data)
  }
}
