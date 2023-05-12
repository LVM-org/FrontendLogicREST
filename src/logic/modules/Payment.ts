import { $api } from '../../services'
import Common from './Common'
import { Logic } from '..'
import { PaymentMethod } from '../types/domains/payment'
import { Paginated } from '../types/domains/common'
import { QueryParams } from '../types/common'

export default class Payment extends Common {
  constructor() {
    super()
  }

  public PaymentMethods: Paginated<PaymentMethod> | undefined
  public PaymentMethod: PaymentMethod | undefined

  public GetPaymentMethods = (filter: QueryParams) => {
    return $api.payment.paymentMethod.fetch(filter).then((response) => {
      this.PaymentMethods = response.data
    })
  }

  public GetPaymentMethod = (id: string) => {
    return $api.payment.paymentMethod.get(id).then((response) => {
      this.PaymentMethod = response.data
    })
  }

  public MakeMethodPrimary = (id: string) => {
    return $api.payment.paymentMethod
      .makePrimaryPaymentMethod(id)
      .then((response) => {
        this.PaymentMethod = response.data
      })
      .catch((error) => {
        //
      })
  }

  public DeleteMethod = (id: string) => {
    return $api.payment.paymentMethod
      .delete(id)
      .then((response) => {
        //
      })
      .catch((error) => {
        //
      })
  }
}
