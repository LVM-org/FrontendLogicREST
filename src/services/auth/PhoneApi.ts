import {
  UpdatePhoneInput,
  VerifyWithTokenInput,
} from './../../logic/types/forms/auth'
import { AxiosResponse } from 'axios'
import { ReadOnlyApiService } from '../common/ReadOnlyService'
import { AuthResponse } from '../../logic/types/domains/auth'

export default class PhoneApi extends ReadOnlyApiService {
  constructor() {
    super('auth/phone')
  }

  public async sendVerifyPhone(data: UpdatePhoneInput) {
    try {
      const response: AxiosResponse<boolean> = await this.axiosInstance.post(
        this.getUrl() + '/verify/text',
        data,
      )

      return response
    } catch (err) {
      this.handleErrors(err)
      if (err.response) {
      }
    }
  }

  public async verifyPhone(data: VerifyWithTokenInput) {
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
