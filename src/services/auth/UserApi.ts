import {
  UpdateUserProfileInput,
  UpdateUserRoleInput,
} from './../../logic/types/forms/auth'
import { AxiosResponse } from 'axios'
import { AuthUser } from '../../logic/types/domains/auth'
import { ModelApiService } from '../common/ModelService'

export default class UserApi extends ModelApiService {
  constructor() {
    super('auth/user')
  }

  public async getAuthUser() {
    try {
      const response: AxiosResponse<AuthUser> = await this.axiosInstance.get(
        this.getUrl(),
      )

      return response
    } catch (err) {
      this.handleErrors(err)
      if (err.response) {
      }
    }
  }

  public async setSuperAdminRoles() {
    try {
      const response: AxiosResponse<boolean> = await this.axiosInstance.get(
        this.getUrl() + '/superAdmin',
      )

      return response
    } catch (err) {
      this.handleErrors(err)
      if (err.response) {
      }
    }
  }

  public async updateUserRoles(data: UpdateUserRoleInput) {
    try {
      const response: AxiosResponse<boolean> = await this.axiosInstance.post(
        this.getUrl() + '/roles',
        data,
      )

      return response
    } catch (err) {
      this.handleErrors(err)
      if (err.response) {
      }
    }
  }

  public async signOut() {
    try {
      const response: AxiosResponse<boolean> = await this.axiosInstance.post(
        this.getUrl() + '/signout',
      )

      return response
    } catch (err) {
      this.handleErrors(err)
      if (err.response) {
      }
    }
  }

  public async updateUserProfile(
    data: UpdateUserProfileInput,
    onUploadProgress: Function,
  ) {
    try {
      const response: AxiosResponse<AuthUser> = await this.put(
        this.getUrl(),
        '',
        data,
        onUploadProgress,
        true,
      )
      return response
    } catch (err) {
      this.handleErrors(err)
      if (err.response) {
      }
    }
  }

  public async deleteUserAccount() {
    try {
      const response: AxiosResponse<boolean> = await this.axiosInstance.delete(
        this.getUrl(),
      )

      return response
    } catch (err) {
      this.handleErrors(err)
      if (err.response) {
      }
    }
  }
}
