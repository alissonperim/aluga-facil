import { SelectQueryBuilder } from 'typeorm'

interface IQueryParams<P, B> {
  queryParams: P
  queryBuilder: SelectQueryBuilder<B>
  tableAlias?: string
}

export const filterQuery = <P, B>({ queryParams, queryBuilder, tableAlias }: IQueryParams<P, B>) => {
  Object.keys(queryParams).forEach(key => {
    queryBuilder.orWhere(`${tableAlias}.${key} = :${key}`, { [key]: queryParams[key] })
  })

  return queryBuilder
}
