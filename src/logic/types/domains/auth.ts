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
  roles: {
    isAdmin: boolean
    isSuperAdmin: boolean
    isVerified: boolean
  }
  lastSignedInAt: number
  signedUpAt: number
  allNames: {
    first: string
    last: string
    full: string
  }
}

interface AuthResponse {
  accessToken: string
  refreshToken: string
  user: AuthUser
}

export { AuthUser, AuthResponse, User }
