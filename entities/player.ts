import { Column, OneToMany } from 'typeorm'
import { Base } from './base'
import { Fee } from './fee'

export class Player extends Base {
    @Column(
        {
            type: 'varchar',
            length: 120,
            name: 'external_id'
        }
    )
    externalId!: string

    @OneToMany(() => Fee, fee => fee.player)
    fees!: Fee[]
}
