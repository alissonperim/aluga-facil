import { IRenter } from '@packages/types'
import { DeepPartial } from 'typeorm'

export interface IUpdateRenterUseCase {
    execute(id: string, data: DeepPartial<IRenter>): Promise<IRenter>
}
