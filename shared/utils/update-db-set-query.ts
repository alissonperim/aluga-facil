import { DeepPartial } from 'typeorm'

export const updateDbSetQuery = <T>(data: T) => {
  let query = {}

  Object.keys(data).map(key => {
    const value = data[key]

    Object.assign(query, { [key]: value })

    return
  })
  return query as DeepPartial<T>
}
