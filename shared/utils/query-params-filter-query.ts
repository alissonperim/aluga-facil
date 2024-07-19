import { camelCaseToSnakeCase } from './camel-case-to-snake-case'

interface IQueryParams<T> {
  queryParams: T
  tableName: string
}

export const filterQuery = <T>({ queryParams, tableName }: IQueryParams<T>) => {
  let filter = `SELECT * FROM ${tableName}`
  const values = []
  const keys = Object.keys(queryParams)

  const conditions = keys
    .map((key, index) => {
      values.push(queryParams[key])
      return `${camelCaseToSnakeCase(key)} = $${index + 1}`
    })
    .join(' OR ')

  return {
    query: `${filter} WHERE ${conditions}`,
    values,
  }
}
