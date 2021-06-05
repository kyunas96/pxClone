export const isEmpty = object => (
  Object.keys(object).length === 0
)

export const capitalize = string => (
  string[0].toUpperCase() + string.slice(1)
)