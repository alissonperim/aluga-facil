import { DeepPartial } from 'typeorm'

/**
 * @param data object with the data to update the entity
 * @returns A object with the data to update the entity
 */
export const updateDbSetQuery = <T>(data: T) => {
  let query = {}

  Object.keys(data).map(key => {
    const value = data[key]

    Object.assign(query, { [key]: value })

    return
  })
  return query as DeepPartial<T>
}
