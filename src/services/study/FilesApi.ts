import { AxiosResponse } from 'axios'
import { ModelApiService } from '../common/ModelService'
import { FileData } from '../../logic/types/domains/common'

export default class FilesApi extends ModelApiService {
  constructor() {
    super('study/files')
  }

  public async getFileMedia(fileId: string) {
    try {
      const response: AxiosResponse<FileData> = await this.axiosInstance.get(
        this.getUrl() + `/${fileId}/media`,
      )

      return response
    } catch (err) {
      this.handleErrors(err)
      if (err.response) {
      }
    }
  }
}
