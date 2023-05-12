export interface CustomizeAIInput {
  name: string
  tagline: string
  photo?: Blob
}

export interface UpdateUserCollegeInput {
  data: {
    type: string
    school: {
      type: string
      departmentId: string
    }
  }
}

export interface UpdateUserAspirantInput {
  data: {
    type: string
    school: {
      type: string
      exams: {
        institutionId: string
        startDate: number
        endDate: number
        courseIds: string[]
      }
    }
  }
}

export interface UpdateUserTeacherInput {
  data: {
    type: string
    school: string
  }
}

export interface CreateVerificationInput {
  socials: {
    website: string
    facebook: string
    twitter: string
    instagram: string
    linkedIn: string
    youtube: string
    tiktok: string
  }
  content: {
    quizzes: string[]
    courses: string[]
  }
}

export interface VerificationStatusInput {
  accept: boolean
  id: string
}

export interface PushNotificationTokenInput {
  token: string
}
