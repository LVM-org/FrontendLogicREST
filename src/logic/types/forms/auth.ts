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
