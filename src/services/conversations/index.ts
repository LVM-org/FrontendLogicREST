import ConversationsApi from './ConversationsApi'
import ReviewsApi from './ReviewsApi'

export const ConversationApi = {
  conversation: new ConversationsApi(),
  review: new ReviewsApi(),
}
