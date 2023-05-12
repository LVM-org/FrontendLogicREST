import { ModelApiService } from '../common/ModelService'

export default class DepartmentsApi extends ModelApiService {
  constructor() {
    super('school/departments')
  }
}
