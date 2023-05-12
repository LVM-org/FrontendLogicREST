import { ModelApiService } from '../common/ModelService'

export default class CoursesApi extends ModelApiService {
  constructor() {
    super('school/courses')
  }
}
