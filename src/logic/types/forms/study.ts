export interface CreateFolderInput {
  title: string
}

export interface SaveItemToFolderInput {
  type: string
  propIds: string[]
  add: boolean
  id: string
}

export interface CreateQuizInput {
  title: string
  description: string
  photo?: Blob
  topicId: string
  tagIds: string[]
}

export interface ReorderQuizInput {
  questions: string[]
}

export interface CreateQuestionInput {
  question: string
  questionMedia?: Blob
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
    options?: string[]
    answers?: any[]
    indicator?: string
    answer?: boolean
    set?: {
      q: string
      a: string
    }[]
  }
  id?: string
}

export interface CreateCourseInput {
  title: string
  description: string
  photo?: Blob
  topicId: string
  tagIds: string[]
  price: {
    amount: number
    currency: string
  }
}

export interface AddItemToCourseInput {
  type: string
  coursableId: string
  add: boolean
  id: string
}

export interface CourseSectionInput {
  label: string
  items: {
    id: string
    type: string
  }[]
}

export interface UpdateCourseSectionsInput {
  sections: CourseSectionInput[]
  id: string
}

export interface CreateDocumentInput {
  type: string
  title: string
  description: string
  tagIds: string[]
  media?: Blob
  topicId: string
  id: string
}
