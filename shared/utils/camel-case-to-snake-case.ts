export const camelCaseToSnakeCase = (key: string) => {
  return key.replace(/([a-zA-Z])(?=[A-Z])/g, '$1_').toLowerCase()
}
