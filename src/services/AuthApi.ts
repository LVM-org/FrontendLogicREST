import { AxiosResponse } from 'axios'
import { ReadOnlyApiService } from './common/ReadOnlyService'

export default class AuthApi extends ReadOnlyApiService {
  constructor() {
    super('auth')
  }

  public async login(data = {}, router: any = undefined) {
    try {
      const response: AxiosResponse = await this.axiosInstance.post(
        this.getUrl() + '/login',
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
