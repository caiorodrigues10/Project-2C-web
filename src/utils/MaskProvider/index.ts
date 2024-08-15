import { createMask } from 'imask'

const cpfMask = (value: string): string => {
  const cpfFormat = createMask({ mask: '000.000.000-00' })
  if (cpfFormat.resolve(value).length !== 0) return cpfFormat.resolve(value)

  return ''
}

const phoneMask = (value: string): string => {
  const textSerialize = value
    .replace('(', '')
    .replace(')', '')
    .replace('-', '')
    .replace(' ', '')

  const phoneFormat = createMask({
    mask: textSerialize.length >= 11 ? '(00) 00000-0000' : '(00) 0000-0000',
  })

  if (phoneFormat.resolve(value).length !== 1) return phoneFormat.resolve(value)

  return value
}

const cepMask = (value: string) => {
  const cep = createMask({ mask: '00.000-000' })

  return cep.resolve(value)
}

const numberText = (value: string) => {
  const number = createMask({ mask: '0000' })

  return number.resolve(value)
}

const removedMask = (value: string): string => {
  const unmaskedValue = createMask({ mask: '00000000000000000' })

  return unmaskedValue.resolve(value)
}

const cnpjMask = (value: string): string => {
  const cnpj = createMask({
    mask: '00.000.000/0000-00',
  })
  return cnpj.resolve(value)
}

const factoryYear = (value: string): string => {
  const year = createMask({
    mask: '0000',
  })

  return year.resolve(value)
}

const stateRegisterMask = (value: string): string => {
  const stateRegister = createMask({
    mask: '0000000000000',
  })
  return stateRegister.resolve(value)
}

export {
  cpfMask,
  phoneMask,
  removedMask,
  cepMask,
  cnpjMask,
  factoryYear,
  stateRegisterMask,
  numberText,
}
