import { passwordRegex } from './Regex'

export const validatePassword = (val: string) => {
  return val.match(passwordRegex)
}
