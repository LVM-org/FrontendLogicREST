import { AppleAuthInput, GoogleAuthInput } from './../../logic/types/forms/auth'
import { AxiosResponse } from 'axios'
import { ReadOnlyApiService } from '../common/ReadOnlyService'
import { AuthResponse } from '../../logic/types/domains/auth'

export default class IdentitiesApi extends ReadOnlyApiService {
  constructor() {
    super('auth/identities')
  }

  public async googleSignIn(data: GoogleAuthInput) {
    try {
      const response: AxiosResponse<AuthResponse> = await this.axiosInstance.post(
        this.getUrl() + '/google',
        data,
      )

      return response
    } catch (err) {
      this.handleErrors(err)
      if (err.response) {
      }
    }
  }

  public async appleSignIn(data: AppleAuthInput) {
    try {
      const response: AxiosResponse<AuthResponse> = await this.axiosInstance.post(
        this.getUrl() + '/apple',
        data,
      )

      return response
    } catch (err) {
      this.handleErrors(err)
      if (err.response) {
      }
    }
  }
}
