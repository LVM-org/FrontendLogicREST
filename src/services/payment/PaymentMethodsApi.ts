import { AxiosResponse } from 'axios'
import { ModelApiService } from '../common/ModelService'
import { PaymentMethod } from '../../logic/types/domains/payment'

export default class PaymentMethodsApi extends ModelApiService {
  constructor() {
    super('payment/methods')
  }

  public async makePrimaryPaymentMethod(methodId: string) {
    try {
      const response: AxiosResponse<PaymentMethod> = await this.axiosInstance.put(
        this.getUrl() + `/${methodId}/primary`,
      )

      return response
    } catch (err) {
      this.handleErrors(err)
      if (err.response) {
      }
    }
  }
}
