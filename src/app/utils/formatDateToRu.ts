export const formatDateToRu = (dateString: string): string => {
  const date = new Date(`${dateString}T00:00:00`) // локальная полночь
  const day = String(date.getDate()).padStart(2, '0')
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const year = date.getFullYear()
  return `${day}.${month}.${year}`
}
