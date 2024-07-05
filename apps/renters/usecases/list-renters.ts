import { IRenter } from '@packages/types'
import { inject, injectable } from 'tsyringe'
import { IListResponse } from '@shared/utils/list-response'
import { IListRentersUseCase } from './contracts/list-renters'
import { IListRentersRepository } from '../repositories/contracts'

@injectable()
export class ListRentersUseCase implements IListRentersUseCase {
    constructor(
        @inject('ListRentersRepository')
        private readonly repository: IListRentersRepository
    ){}
    async execute(): Promise<IListResponse<IRenter>> {
        const renters = await this.repository.list()

        return {
            data: renters as IRenter[],
        }
    }
}
