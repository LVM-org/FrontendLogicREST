import { AxiosResponse } from 'axios'
import { Folder } from '../../logic/types/domains/study'
import { SaveItemToFolderInput } from '../../logic/types/forms/study'
import { ModelApiService } from '../common/ModelService'

export default class FoldersApi extends ModelApiService {
  constructor() {
    super('study/folders')
  }

  public async saveItemToFolder(data: SaveItemToFolderInput) {
    try {
      const response: AxiosResponse<Folder> = await this.axiosInstance.put(
        this.getUrl() + `/${data.id}/save`,
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
