import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'
import { API_URL } from '../../common/constants'

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

    // auth token
    this.axiosInstance.defaults.headers.common['Authorization'] = `Bearer `
  }

  public getUrl(id = '') {
    this.axiosInstance.defaults.headers.common['Authorization'] = `Bearer `
    return id ? `/${this.resource}/${id}` : `/${this.resource}`
  }

  public handleErrors(err: any) {
    // Note: here you may want to add your errors handling
    if (err.message === 'Network Error') {
      //
    }
  }
}
