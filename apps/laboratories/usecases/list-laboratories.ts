import { IListLaboratoriesUseCase } from './contracts'
import { inject, injectable } from 'tsyringe'
import { IListResponse } from '@shared/utils/list-response'
import { IListLaboratoriesRepository } from '@laboratories/repositories/contracts'
import { ListLaboratoriesQueryParams } from '@laboratories/contracts'
import { laboratoryDto } from '@laboratories/domain/owner-dto'
import { ILaboratory } from '@packages/types'

@injectable()
export class ListLaboratoriesUseCase implements IListLaboratoriesUseCase {
  constructor(
    @inject('ListLaboratoriesRepository')
    private readonly listCustomersRepository: IListLaboratoriesRepository,
  ) {}
  async execute(params: ListLaboratoriesQueryParams): Promise<IListResponse<ILaboratory>> {
    const laboratories = await this.listCustomersRepository.list(params)

    return {
      data: laboratories.map(laboratoryDto),
    }
  }
}
