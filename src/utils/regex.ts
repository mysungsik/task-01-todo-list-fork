export const emailRegex = (email: string): boolean => {
  return emailExpression.test(email)
}

export const passwordRegex = (password: string): boolean => {
  return passwordExpression.test(password)
}

const emailExpression: RegExp = /@/

const passwordExpression: RegExp = /^.{8,}$/
