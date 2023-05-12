export interface UpdateUserProfileInput {
  name: {
    first: string
    last: string
  }
  description: string
  photo?: Blob
}

export interface UpdateUserRoleInput {
  role: string
  userId: string
  value: boolean
}

export interface SignUpInput {
  email: string
  password: string
  name?: {
    first: string
    last: string
  }
  description?: string
  photo?: Blob
}

export interface SignInInput {
  email: string
  password: string
}

export interface VerifyWithTokenInput {
  token: string
}

export interface SendResetPasswordInput {
  email: string
}

export interface ResetPasswordWithTokenInput {
  token: string
  password: string
}

export interface UpdatePasswordInput {
  oldPassword: string
  password: string
}

export interface GoogleAuthInput {
  idToken: string
  accessToken: string
}

export interface AppleAuthInput {
  idToken: string
  email: string
  firstName: string
  lastName: string
}

export interface UpdatePhoneInput {
  phone: {
    code: string
    number: string
  }
}
