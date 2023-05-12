import { $api } from '../../services'
import Common from './Common'
import { Logic } from '..'
import { Paginated } from '../types/domains/common'
import { Conversation, Message, Review } from '../types/domains/conversations'
import { QueryParams } from '../types/common'
import {
  AddTutorInput,
  CreateMessageInput,
  DeleteTutorInput,
} from '../types/forms/conversations'

export default class Conversations extends Common {
  constructor() {
    super()
  }

  public AllConversations: Paginated<Conversation> | undefined
  public SingleConversation: Conversation | undefined
  public Messages: Paginated<Message> | undefined
  public SingleMessage: Message | undefined
  public Reviews: Paginated<Review> | undefined
  public SingleReview: Review | undefined

  // form input
  public AddTutorForm: AddTutorInput | undefined
  public DeleteTutorForm: DeleteTutorInput | undefined
  public CreateMessageForm: CreateMessageInput | undefined

  public GetConversations = (filters: QueryParams) => {
    return $api.conversations.conversation.fetch(filters).then((response) => {
      this.AllConversations = response.data
    })
  }

  public GetConversation = (id: string) => {
    return $api.conversations.conversation.get(id).then((response) => {
      this.SingleConversation = response.data
      return response.data
    })
  }

  public GetMessages = (conversationId: string) => {
    if (!conversationId) {
      return new Promise((resolve) => {
        resolve('')
      })
    }
    return $api.conversations.conversation
      .getMessages(conversationId)
      .then((response) => {
        this.Messages = response.data
        return response.data
      })
  }

  public GetMessage = (conversationId: string, messageId: string) => {
    return $api.conversations.conversation
      .getMessage(conversationId, messageId)
      .then((response) => {
        this.SingleMessage = response.data
      })
  }

  public GetReviews = (filters: QueryParams) => {
    return $api.conversations.review.fetch(filters).then((response) => {
      this.Reviews = response.data
    })
  }

  public GetReview = (id: string) => {
    return $api.conversations.review
      .get(id)
      .then((response) => {
        this.SingleReview = response.data
      })
      .catch((error) => {
        //
      })
  }

  public CreateConversation = (title: string) => {
    return $api.conversations.conversation
      .post(null, {
        body: title,
      })
      .then((response) => {
        this.SingleConversation = response.data
        return response.data
      })
      .catch((error) => {
        //
      })
  }

  public StarMessage = (
    conversationId: string,
    messageId: string,
    starred: boolean,
  ) => {
    return $api.conversations.conversation
      .starMessage(conversationId, messageId, { starred })
      .then((response) => {
        this.SingleMessage = response.data
        this.Messages.results.forEach((message) => {
          if (message.id == response.data.id) {
            message = response.data
          }
        })
      })
      .catch((error) => {
        //
      })
  }

  public MarkMessages = (conversationId: string) => {
    return $api.conversations.conversation
      .markMessagesAsRead(conversationId)
      .then((response) => {
        //
      })
      .catch((error) => {
        //
      })
  }

  public CreateMessage = (conversationId: string, formIsValid: boolean) => {
    if (formIsValid && this.CreateMessageForm) {
      return $api.conversations.conversation
        .createMessage(conversationId, this.CreateMessageForm)
        .then((response) => {
          this.SingleMessage = response.data
        })
        .catch((error) => {
          //
        })
    }
  }

  public AddTutor = () => {
    if (this.AddTutorForm) {
      return $api.conversations.conversation
        .addTutor(this.AddTutorForm)
        .then((response) => {
          this.SingleConversation = response.data
        })
    }
  }

  public DeleteConversation = (id: string) => {
    return $api.conversations.conversation
      .delete(id)
      .then((response) => {
        //
      })
      .then((error) => {
        //
      })
  }

  public DeleteTutor = () => {
    if (this.DeleteTutorForm) {
      return $api.conversations.conversation
        .deleteTutor(this.DeleteTutorForm)
        .then((response) => {
          this.SingleConversation = response.data
        })
        .catch((error) => {
          //
        })
    }
  }
}
