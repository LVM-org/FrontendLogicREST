export interface CreateGameInput {
  quizId: string
}

export interface JoinGame {
  join: boolean
}

export interface AddQuestionAnswer {
  questionId: string
  answer: any[] | string | boolean
}
