import { ICreateLaboratory } from '@laboratories/contracts'
import { ILaboratory } from '@packages/types'

export interface ICreateLaboratoryUseCase {
  execute(data: ICreateLaboratory): Promise<ILaboratory>
}
