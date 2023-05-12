import { AxiosResponse } from 'axios'
import { ModelApiService } from '../common/ModelService'

export default class TransactionsApi extends ModelApiService {
  constructor() {
    super('payment/transactions')
  }

  public async fulfillTransaction(transactionId: string) {
    try {
      const response: AxiosResponse<boolean> = await this.axiosInstance.put(
        this.getUrl() + `/${transactionId}/fulfill`,
      )

      return response
    } catch (err) {
      this.handleErrors(err)
      if (err.response) {
      }
    }
  }

  public async getFlutterwaveKey() {
    try {
      const response: AxiosResponse<{
        publicKey: string
      }> = await this.axiosInstance.get(this.getUrl() + `/flutterwave/secrets`)

      return response
    } catch (err) {
      this.handleErrors(err)
      if (err.response) {
      }
    }
  }
}
