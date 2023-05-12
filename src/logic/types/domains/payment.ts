import { SingleUser } from './users'

export interface PaymentMethod {
  hash: string
  id: string
  data: {
    type: string
    last4Digits: string
    country: string
    cardType: string
    expiredAt: number
    expired: boolean
  }
  token: string
  primary: boolean
  userId: string
  createdAt: number
  updatedAt: number
}

export interface Transaction {
  hash: string
  id: string
  userId: string
  email: string
  title: string
  amount: number
  currency: string
  status: string
  data: {
    type: string
  }
  createdAt: number
  updatedAt: number
}

export interface Wallet {
  hash: string
  id: string
  userId: string
  balance: {
    amount: number
    currency: number
  }
  subscription: {
    data: {
      tutorAidedConversations: number
    }
    active: boolean
    current?: string
    next?: string
  }
  createdAt: number
  updatedAt: number
}

export interface Purchase {
  hash: string
  id: string
  user: SingleUser
  price: {
    amount: number
    currency: string
  }
  data: {
    type: string
    id: string
    userId: string
  }
  createdAt: number
  updatedAt: number
}
