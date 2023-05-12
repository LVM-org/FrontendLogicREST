export interface CreateTransactionInput {
  data: {
    type: string
  }
}

export interface MakePurchaseInput {
  type: string
  id: string
  methodId: string
}
