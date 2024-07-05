import { inject, injectable } from 'tsyringe'
import { IRenter } from '@packages/types'
import { DeepPartial } from 'typeorm'
import { IUpdateRenterUseCase } from './contracts/update-renter'
import { IUpdateRenterRepository } from '../repositories/contracts'
import { Renter } from '@entities/renter'

@injectable()
export class UpdateRenterUseCase implements IUpdateRenterUseCase {
    constructor(
        @inject('UpdateRenterRepository')
        private readonly repository: IUpdateRenterRepository
    ){}
    
    async execute (id: string, data: DeepPartial<Renter>): Promise<IRenter> {
        const renter = await this.repository.update(id, data)

        return renter as IRenter
    }
}
