import { Column, Entity } from 'typeorm'
import { Base } from './base'

@Entity('insurances')
export class Insurance extends Base {
  @Column({
    type: 'varchar',
    length: 255,
  })
  name!: string
}
