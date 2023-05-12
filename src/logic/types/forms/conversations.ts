export interface CreateConversationInput {
  title: string
}

export interface AddTutorInput {
  tutorId: string
  id: string
}

export interface StarMessageInput {
  starred: boolean
}

export interface CreateMessageInput {
  body: string
  media?: Blob
}

export interface DeleteTutorInput {
  rating: number
  message: string
  id: string
}
