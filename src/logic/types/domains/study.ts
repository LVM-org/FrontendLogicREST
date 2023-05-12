import { FileData } from './common'
import { SingleUser } from './users'

export interface Folder {
  hash: string
  id: string
  title: string
  saved: {
    courses: string[]
    quizzes: string[]
  }
  user: SingleUser
  createdAt: number
  updatedAt: number
}

export interface Quiz {
  hash: string
  id: string
  title: string
  description: string
  photo?: FileData
  questions: string[]
  courseId?: string
  user: SingleUser
  topicId: string
  tagIds: string[]
  status: string
  meta: {
    games: number
    total: number
  }
  createdAt: number
  updatedAt: number
}

export interface Question {
  hash: string
  id: string
  userId: string
  quizId: string
  question: string
  questionMedia?: FileData
  timeLimit: number
  data: {
    type:
      | 'multipleChoice'
      | 'writeAnswer'
      | 'trueOrFalse'
      | 'fillInBlanks'
      | 'dragAnswers'
      | 'sequence'
      | 'match'
    indicator?: string
    options?: string[]
    answers?: any[]
    answer?: boolean
    set?: {
      q: string
      a: string
    }[]
  }
  createdAt: number
  updatedAt: number
}

export interface Course {
  hash: string
  id: string
  coursables: {
    id: string
    type: string
  }[]
  sections: {
    label: string
    items: {
      id: string
      type: string
    }[]
  }[]
  title: string
  description: string
  photo?: FileData
  user: SingleUser
  topicId: string
  tagIds: string[]
  status: string
  frozen: boolean
  price: {
    amount: number
    currency: string
  }
  createdAt: number
  updatedAt: number
}

export interface SofaFile {
  hash: string
  id: string
  title: string
  description: string
  photo?: FileData
  type: string
  courseId?: string
  user: SingleUser
  topicId: string
  tagIds: string[]
  status: string
  createdAt: number
  updatedAt: number
}

export interface SofaMediaFile {
  name: string
  type: string
  size: number
  duration: number
  path: string
  timestamp: number
  link: string
}
