import {
  SignInInput,
  SignUpInput,
  VerifyWithTokenInput,
} from './../../logic/types/forms/auth'
import { AxiosResponse } from 'axios'
import { ReadOnlyApiService } from '../common/ReadOnlyService'
import { AuthResponse, AuthUser } from '../../logic/types/domains/auth'

export default class EmailApi extends ReadOnlyApiService {
  constructor() {
    super('auth/emails')
  }

  public async sendVerificationMail() {
    try {
      const response: AxiosResponse<boolean> = await this.axiosInstance.post(
        this.getUrl() + '/verify/mail',
      )

      return response
    } catch (err) {
      this.handleErrors(err)
      if (err.response) {
      }
    }
  }

  public async signUp(data: SignUpInput) {
    try {
      const response: AxiosResponse<AuthResponse> = await this.axiosInstance.post(
        this.getUrl() + '/signup',
        data,
      )

      return response
    } catch (err) {
      this.handleErrors(err)
      if (err.response) {
      }
    }
  }

  public async signIn(data: SignInInput) {
    try {
      const response: AxiosResponse<AuthResponse> = await this.axiosInstance.post(
        this.getUrl() + '/signin',
        data,
      )

      return response
    } catch (err) {
      this.handleErrors(err)
      if (err.response) {
      }
    }
  }

  public async verifyEmail(data: VerifyWithTokenInput) {
    try {
      const response: AxiosResponse<AuthResponse> = await this.axiosInstance.post(
        this.getUrl() + '/verify',
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
