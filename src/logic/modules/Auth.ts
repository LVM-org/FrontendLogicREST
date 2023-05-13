import { $api } from '../../services'
import Common from './Common'
import { Logic } from '..'
import { AuthResponse, AuthUser } from '../types/domains/auth'
import { SignInInput, SignUpInput } from '../types/forms/auth'

export default class Auth extends Common {
  constructor() {
    super()
    this.AccessToken = localStorage.getItem('access_token')
    this.AuthUser = localStorage.getItem('auth_user')
      ? JSON.parse(localStorage.getItem('auth_user') || '{}')
      : undefined
  }

  public AccessToken: string | null = null
  public AuthUser: AuthUser | undefined = undefined

  // input data

  public SignUpForm: SignUpInput | undefined
  public SignInForm: SignInInput | undefined

  private RedirectUser = () => {
    if (!this.AuthUser.isEmailVerified) {
      Logic.Common.GoToRoute('/auth/verify-email')
    } else {
      Logic.Common.GoToRoute('/')
    }
  }

  public SetTokens = (AuthData: AuthResponse) => {
    localStorage.setItem(
      'AuthTokens',
      JSON.stringify({
        accessToken: AuthData.accessToken,
        refreshToken: AuthData.refreshToken,
      }),
    )

    localStorage.setItem('auth_user', JSON.stringify(AuthData.user))
  }

  public SignUp = (formIsValid: boolean) => {
    if (formIsValid && this.SignUpForm) {
      Logic.Common.showLoader({
        loading: true,
        show: true,
        useModal: true,
      })
      return $api.auth.email
        .signUp(this.SignUpForm)
        .then((response) => {
          this.AuthUser = response.data.user
          this.SetTokens(response.data)
          Logic.Common.hideLoader()
          this.RedirectUser()
        })
        .catch((error) => {
          // handle error
          throw error
        })
    }
  }

  public SignIn = (formIsValid: boolean) => {
    if (formIsValid && this.SignInForm) {
      Logic.Common.showLoader({
        loading: true,
        show: true,
        useModal: true,
      })
      return $api.auth.email
        .signIn(this.SignInForm)
        .then((response) => {
          this.AuthUser = response.data.user
          this.SetTokens(response.data)
          Logic.Common.hideLoader()
          this.RedirectUser()
          return response.data.user
        })
        .catch((error) => {
          throw error
        })
    }
  }
}
