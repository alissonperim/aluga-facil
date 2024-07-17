import 'dotenv/config'
import { User } from '@entities/user'
import { DataSource } from 'typeorm'
import { Address } from '@entities/address'
import { Owner } from '@entities/owner'
import { Renter } from '@entities/renter'
import { Fee } from '@entities/fee'
import { Property } from '@entities/property'
import { Contract } from '@entities/contract'

const {
    DB_NAME,
    DB_PORT,
    DB_HOST,
    DB_PW,
    DB_USER,
} = process.env

export const AppDataSource = () => {
    return new DataSource({
        type: 'postgres',
        host: DB_HOST,
        port: +DB_PORT,
        username: DB_USER,
        password: DB_PW,
        database: DB_NAME,
        entities: [
            User,
            Address,
            Owner,
            Renter,
            Fee,
            Property,
            Contract
        ],
        migrations: [
            'infra/migrations/*.ts'
        ],
        poolSize: 20
    })
}

console.log({
    DB_NAME,
    DB_PORT,
    DB_HOST,
    DB_PW,
    DB_USER,
})

export default new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: +DB_PORT,
    username: DB_USER,
    password: DB_PW,
    database: DB_NAME,
    entities: [
        User,
        Address,
        Owner,
        Renter,
        Fee,
        Property,
        Contract
    ],
    migrations: [
        'infra/migrations/*.ts'
    ]
})
