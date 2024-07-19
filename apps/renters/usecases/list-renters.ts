import { IRenter } from '@packages/types'
import { inject, injectable } from 'tsyringe'
import { IListResponse } from '@shared/utils/list-response'
import { IListRentersUseCase } from './contracts/list-renters'
import { IListRentersRepository } from '../repositories/contracts'
import { renterDto } from '@renters/domain/renter-dto'
import { ListRentersQueryStringParams } from '@renters/handlers/list'

@injectable()
export class ListRentersUseCase implements IListRentersUseCase {
  constructor(
    @inject('ListRentersRepository')
    private readonly repository: IListRentersRepository,
  ) {}
  async execute(params: ListRentersQueryStringParams): Promise<IListResponse<IRenter>> {
    const renters = await this.repository.list(params)

    return {
      data: renters.map(renterDto),
    }
  }
}
