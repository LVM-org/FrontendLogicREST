import { AxiosResponse } from 'axios'
import { ReadOnlyApiService } from '../common/ReadOnlyService'

export default class WalletsApi extends ReadOnlyApiService {
  constructor() {
    super('payment/wallets')
  }

  public async subscribeToPlan(data: { planId: string }) {
    try {
      const response: AxiosResponse<any> = await this.axiosInstance.post(
        this.getUrl() + `/subscriptions`,
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
