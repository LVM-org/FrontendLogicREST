import { Logic } from './../../logic/modules/index'
import { ReadOnlyApiService } from './ReadOnlyService'
import { AxiosResponse } from 'axios'

export class ModelApiService extends ReadOnlyApiService {
  constructor(resource: string) {
    super(resource)
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public async post(
    url = null,
    data: any = {},
    onUploadProgress = (progressEvent: any) => {
      // onprogress callback
    },
    useFormdata = true,
  ): Promise<AxiosResponse<any, any>> {
    try {
      // convert request data to formData
      const formData: FormData = Logic.Common.convertToFormData(data)
      let headers = {}

      if (useFormdata) {
        headers = {
          'content-type': 'multipart/form-data',
        }
      }

      const response = await this.axiosInstance.post(
        url ? url : this.getUrl(),
        useFormdata ? formData : data,
        {
          onUploadProgress: onUploadProgress,
          headers,
        },
      )

      return response
    } catch (err) {
      this.handleErrors(err)
      throw err
    }
  }

  public async put(
    url = null,
    id: string,
    data: any = {},
    onUploadProgress: any = (progressEvent: any) => {
      // onprogress callback
    },
    useFormdata = true,
  ): Promise<AxiosResponse<any, any>> {
    // convert request data to formData
    const formData: FormData = Logic.Common.convertToFormData(data)

    let headers = {}

    if (useFormdata) {
      headers = {
        'content-type': 'multipart/form-data',
      }
    }

    try {
      const response: AxiosResponse = await this.axiosInstance.put(
        url ? url : this.getUrl(id),
        useFormdata ? formData : data,
        {
          onUploadProgress: onUploadProgress,
          headers: {
            'content-type': 'multipart/form-data',
          },
        },
      )

      return response
    } catch (err) {
      this.handleErrors(err)
      throw err
    }
  }

  public async delete(
    id: string | undefined,
  ): Promise<AxiosResponse<any, any>> {
    if (!id) throw Error('Id is not provided')
    try {
      const response = await this.axiosInstance.delete(this.getUrl(id))

      return response
    } catch (err) {
      this.handleErrors(err)
      throw err
    }
  }
}
