import { ReadOnlyApiService } from '../common/ReadOnlyService'

export default class ReviewsApi extends ReadOnlyApiService {
  constructor() {
    super('conversations/reviews')
  }
}
