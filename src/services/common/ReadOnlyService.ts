import { AxiosResponse } from 'axios'
import { BaseApiService } from './BaseService'
import { QueryParams } from '../../logic/types/common'

export class ReadOnlyApiService extends BaseApiService {
  constructor(resource: string) {
    super(resource)
  }

  public async fetch(
    filters: QueryParams = {},
  ): Promise<AxiosResponse<any, any>> {
    try {
      const response: AxiosResponse = await this.axiosInstance.get(
        this.getUrl(),
        {
          params: filters,
        },
      )

      return response
    } catch (err) {
      this.handleErrors(err)
      throw err
    }
  }

  public async get(id: string): Promise<AxiosResponse<any, any>> {
    try {
      if (!id) {
        id = 'empty'
      }

      const response: AxiosResponse = await this.axiosInstance.get(
        this.getUrl(id),
      )

      return response
    } catch (err) {
      this.handleErrors(err)
      throw err
    }
  }

  public async search(query: string): Promise<AxiosResponse<any, any>> {
    try {
      if (!query) throw Error('query is not provided')

      const response: AxiosResponse = await this.axiosInstance.get(
        this.getUrl() + '?q=' + query,
      )

      return response
    } catch (err) {
      this.handleErrors(err)
      throw err
    }
  }
}
