import { FileData } from './common'

type AuthTypes = 'email' | 'google'

interface User {
  name: {
    first: string
    last: string
    middle: string
    full: string
  }
  email: string
  description: string
  photo?: FileData
  phone?: {
    code: string
    number: string
  }
}

interface AuthUser extends User {
  hash: string
  id: string
  isEmailVerified: boolean
  authTypes: AuthTypes[]
}

interface AuthResponse {
  accessToken: string
  refreshToken: string
  user: AuthUser
}

export { AuthUser, AuthResponse, User }
