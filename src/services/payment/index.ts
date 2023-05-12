import PaymentMethodsApi from './PaymentMethodsApi'
import PurchasesApi from './PurchasesApi'
import TransactionsApi from './TransactionsApi'
import WalletsApi from './WalletsApi'

export const PaymentApi = {
  paymentMethod: new PaymentMethodsApi(),
  purchase: new PurchasesApi(),
  transaction: new TransactionsApi(),
  wallet: new WalletsApi(),
}
