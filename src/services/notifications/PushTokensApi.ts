import { AxiosResponse } from 'axios'
import { ReadOnlyApiService } from '../common/ReadOnlyService'
import { PushNotificationTokenInput } from '../../logic/types/forms/users'

export default class PushTokensApi extends ReadOnlyApiService {
  constructor() {
    super('tokens/devices')
  }

  public async subscribeDevice(data: PushNotificationTokenInput) {
    try {
      const response: AxiosResponse<boolean> = await this.axiosInstance.put(
        this.getUrl() + '/subscribe',
        data,
      )

      return response
    } catch (err) {
      this.handleErrors(err)
      if (err.response) {
      }
    }
  }

  public async unsubscribeDevice(data: PushNotificationTokenInput) {
    try {
      const response: AxiosResponse<boolean> = await this.axiosInstance.put(
        this.getUrl() + '/unsubscribe',
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
