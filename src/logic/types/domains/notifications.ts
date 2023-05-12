export interface Notification {
  hash: string
  id: string
  title: string
  body: string
  data: {
    type: string
    verificationId: string
  }
  userId: string
  seen: boolean
  sendEmail: boolean
  createdAt: number
  updatedAt: number
}
