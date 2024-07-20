import { SelectQueryBuilder } from 'typeorm'

interface IQueryParams<P, B> {
  queryParams: P
  queryBuilder: SelectQueryBuilder<B>
}

export const filterQuery = <P, B>({ queryParams, queryBuilder }: IQueryParams<P, B>) => {
  Object.keys(queryParams).forEach(key => {
    queryBuilder.orWhere(`renters.${key} = :${key}`, { [key]: queryParams[key] })
  })

  return queryBuilder
}
