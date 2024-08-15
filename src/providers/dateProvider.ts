const dateToday = (value = '', day = ''): string => {
  if (value[0]) {
    return value
  }

  const data = new Date()
  const dia = day || String(data.getDate()).padStart(2, '0')
  const mes = String(data.getMonth() + 1).padStart(2, '0')
  const ano = data.getFullYear()

  return `${ano}-${mes}-${dia}`
}

const dateMaxOfAge = (): string => {
  const data = new Date()
  const dia = String(data.getDate()).padStart(2, '0')
  const mes = String(data.getMonth() + 1).padStart(2, '0')
  const ano = data.getFullYear() - 16

  return `${ano}-${mes}-${dia}`
}

const dateMinOfAge = (): string => {
  const data = new Date()
  const dia = String(data.getDate()).padStart(2, '0')
  const mes = String(data.getMonth() + 1).padStart(2, '0')
  const ano = data.getFullYear() - 200

  return `${ano}-${mes}-${dia}`
}

export { dateToday, dateMinOfAge, dateMaxOfAge }
