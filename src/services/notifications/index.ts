import NotificationsApi from './NotificationsApi'
import PushTokensApi from './PushTokensApi'

export const NotificationApi = {
  notifications: new NotificationsApi(),
  pushTokens: new PushTokensApi(),
}
