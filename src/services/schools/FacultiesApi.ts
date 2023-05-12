import { ModelApiService } from '../common/ModelService'

export default class FacultiesApi extends ModelApiService {
  constructor() {
    super('school/faculties')
  }
}
