import { BeforeInsert, Column, Entity } from 'typeorm'
import { PersonalData } from './personal-data'
import { DOMAIN, ulidGenerator } from '@shared/utils'
import { EmployeeRoleType } from '@packages/types'

@Entity('employees')
export class Employee extends PersonalData {
  @Column({
    type: 'varchar',
    length: 6,
  })
  code!: string

  @Column({
    type: 'decimal',
    nullable: true,
  })
  salary!: number

  @Column({
    type: 'enum',
    enum: EmployeeRoleType,
  })
  role!: EmployeeRoleType

  @BeforeInsert()
  protected generateId() {
    this.id = ulidGenerator(DOMAIN.employee)
  }
}
