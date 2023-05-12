import {
  CustomizeAIInput,
  UpdateUserAspirantInput,
  UpdateUserCollegeInput,
  UpdateUserTeacherInput,
} from './../../logic/types/forms/users'
import { SingleUser } from './../../logic/types/domains/users'
import { AxiosResponse } from 'axios'
import { ReadOnlyApiService } from '../common/ReadOnlyService'

export default class UsersApi extends ReadOnlyApiService {
  constructor() {
    super('users/users')
  }

  public async customizeUserAI(data: CustomizeAIInput) {
    try {
      const response: AxiosResponse<SingleUser> = await this.axiosInstance.post(
        this.getUrl() + '/ai',
        data,
      )

      return response
    } catch (err) {
      this.handleErrors(err)
      if (err.response) {
      }
    }
  }

  public async updateUser(
    data:
      | UpdateUserCollegeInput
      | UpdateUserAspirantInput
      | UpdateUserTeacherInput,
  ) {
    try {
      const response: AxiosResponse<SingleUser> = await this.axiosInstance.post(
        this.getUrl() + '/type',
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
