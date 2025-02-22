import 'dotenv/config'
import { DataSource } from 'typeorm'
import { SnakeNamingStrategy } from 'typeorm-naming-strategies'

const { DB_NAME, DB_PORT, DB_HOST, DB_PW, DB_USER } = process.env

export const AppDataSource = () => {
  return new DataSource({
    type: 'postgres',
    host: DB_HOST,
    port: +DB_PORT,
    username: DB_USER,
    password: DB_PW,
    database: DB_NAME,
    entities: [],
    migrations: ['infra/migrations/*.ts'],
    poolSize: 20,
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
  entities: [],
  migrations: ['infra/migrations/*.ts'],
  namingStrategy: new SnakeNamingStrategy(),
})
