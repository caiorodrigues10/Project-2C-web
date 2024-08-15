function regexNumber(value: string) {
  const regex = /[0-9]/

  return value.match(regex)
}

const passwordRegex =
  /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/

export { regexNumber, passwordRegex }
