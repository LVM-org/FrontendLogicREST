import {
  CreateVerificationInput,
  VerificationStatusInput,
} from './../../logic/types/forms/users'
import { UserVerification } from './../../logic/types/domains/users'
import { AxiosResponse } from 'axios'
import { ReadOnlyApiService } from '../common/ReadOnlyService'

export default class VerificationsApi extends ReadOnlyApiService {
  constructor() {
    super('users/verifications')
  }

  public async createVerification(data: CreateVerificationInput) {
    try {
      const response: AxiosResponse<UserVerification> = await this.axiosInstance.post(
        this.getUrl(),
        data,
      )

      return response
    } catch (err) {
      this.handleErrors(err)
      if (err.response) {
      }
    }
  }

  public async updateUserVerification(data: VerificationStatusInput) {
    try {
      const response: AxiosResponse<boolean> = await this.axiosInstance.post(
        this.getUrl() + `/${data.id}/accept`,
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
