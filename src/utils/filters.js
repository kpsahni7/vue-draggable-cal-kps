export const abr = value => {
  if (!value) return ''
  // return `${value.slice(0, 3).toUpperCase()}`
  return `${value.charAt(0).toUpperCase()}${value.slice(1).toLowerCase()}`
}

export const stringSlice = value => {
  if (!value) return ''
  return `${value.slice(0, 3).toUpperCase()}`
}

export const ymd = obj => {
  if (!obj) return ''
  return `${obj.fullYear}-${obj.monthNumber}-${obj.day}`
}
