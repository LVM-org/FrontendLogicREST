import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from 'axios'
import { Logic } from '../../logic/modules'
import { API_URL } from '../../common/constants'
import { AuthResponse } from '../../logic/types/domains/auth'

export class BaseApiService {
  private readonly baseUrl = API_URL
  public axiosInstance: AxiosInstance
  private config: AxiosRequestConfig
  resource

  constructor(resource: string) {
    if (!resource) throw new Error('Resource is not provided')
    this.resource = resource

    this.config = {
      baseURL: this.baseUrl,
    }

    this.axiosInstance = axios.create(this.config)
  }

  public getUrl(id = ''): string {
    // auth token
    const tokens: AuthResponse = localStorage.getItem('AuthTokens')
      ? JSON.parse(localStorage.getItem('AuthTokens') || '{}')
      : undefined
    this.axiosInstance.defaults.baseURL = Logic.Common.apiUrl
    this.axiosInstance.defaults.headers.common['Access-Token'] = tokens
      ? tokens.accessToken
      : ''
    this.axiosInstance.defaults.headers.common['Refresh-Token'] = tokens
      ? tokens.refreshToken
      : ''
    return id ? `/${this.resource}/${id}` : `/${this.resource}`
  }

  public handleErrors(err: AxiosError | any): void {
    // Note: here you may want to add your errors handling
    if (err.response?.status == 461) {
      Logic.Common.hideLoader()
      Logic.Auth.SignOut()
    }
    throw err
  }
}
