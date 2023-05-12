import { SingleUser } from './users'

export interface Game {
  hash: string
  id: string
  quizId: string
  user: SingleUser
  status: string
  participants: string[]
  questions: string[]
  scores: {}
  startedAt?: number
  endedAt?: number
  createdAt: number
  updatedAt: number
}

export interface GameParticipantAnswer {
  hash: string
  id: string
  gameId: string
  userId: string
  data: {}
  createdAt: number
  updatedAt: number
}
