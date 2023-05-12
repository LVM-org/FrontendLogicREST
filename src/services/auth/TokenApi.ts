import { AxiosResponse } from 'axios'
import { ReadOnlyApiService } from '../common/ReadOnlyService'
import { AuthResponse } from '../../logic/types/domains/auth'

export default class TokenApi extends ReadOnlyApiService {
  constructor() {
    super('auth/token')
  }

  public async exchangeToken() {
    try {
      const response: AxiosResponse<AuthResponse> = await this.axiosInstance.post(
        this.getUrl(),
      )

      return response
    } catch (err) {
      this.handleErrors(err)
      if (err.response) {
      }
    }
  }
}
