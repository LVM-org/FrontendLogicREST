import {
  ResetPasswordWithTokenInput,
  SendResetPasswordInput,
  UpdatePasswordInput,
} from './../../logic/types/forms/auth'
import { AxiosResponse } from 'axios'
import { ReadOnlyApiService } from '../common/ReadOnlyService'
import { AuthResponse } from '../../logic/types/domains/auth'

export default class PasswordsApi extends ReadOnlyApiService {
  constructor() {
    super('auth/passwords')
  }

  public async sendResetPasswordMail(data: SendResetPasswordInput) {
    try {
      const response: AxiosResponse<boolean> = await this.axiosInstance.post(
        this.getUrl() + '/mail',
        data,
      )

      return response
    } catch (err) {
      this.handleErrors(err)
      if (err.response) {
      }
    }
  }

  public async resetPassword(data: ResetPasswordWithTokenInput) {
    try {
      const response: AxiosResponse<AuthResponse> = await this.axiosInstance.post(
        this.getUrl() + '/reset',
        data,
      )

      return response
    } catch (err) {
      this.handleErrors(err)
      if (err.response) {
      }
    }
  }

  public async updatePassword(data: UpdatePasswordInput) {
    try {
      const response: AxiosResponse<boolean> = await this.axiosInstance.post(
        this.getUrl() + '/update',
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
