import { Column } from 'typeorm'
import { Base } from './base'

export class Player extends Base {
    @Column(
        {
            type: 'varchar',
            length: 120,
            name: 'external_id'
        }
    )
    externalId!: string

    // @OneToMany(() => Fee, fee => fee.player)
    // fees!: Fee[]
}
