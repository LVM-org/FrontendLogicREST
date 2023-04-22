import { $api } from '../../services'
import Common from './Common'
import { Logic } from '..'

export default class Auth extends Common {
  constructor() {
    super()
    this.AccessToken = localStorage.getItem('access_token')
    this.AuthUser = localStorage.getItem('auth_user')
      ? JSON.parse(localStorage.getItem('auth_user') || '{}')
      : undefined
  }

  public AccessToken: string | null = null
  public AuthUser: undefined = undefined
}
