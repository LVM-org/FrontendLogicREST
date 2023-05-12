import { ModelApiService } from '../common/ModelService'

export default class PurchasesApi extends ModelApiService {
  constructor() {
    super('payment/purchases')
  }
}
