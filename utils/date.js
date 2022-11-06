export const getFormatedDate = (date) => date.toISOString().slice(0, 10)

export const getPast = (date, days) =>
  new Date(date.getFullYear(), date.getMonth(), date.getDate() - days)
