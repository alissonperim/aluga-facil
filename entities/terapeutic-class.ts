import { Column, Entity } from 'typeorm'
import { Base } from './base'

@Entity('terapeutic_class')
export class TerapeuticClass extends Base {
  @Column({
    type: 'varchar',
    length: 256,
  })
  name!: string
}
