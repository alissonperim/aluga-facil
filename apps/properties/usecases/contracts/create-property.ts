import { IProperty } from '@packages/types'
import { ICreateProperty } from '@properties/contracts/create-property'

export interface ICreatePropertyUseCase {
  execute(data: ICreateProperty): Promise<IProperty>
}
