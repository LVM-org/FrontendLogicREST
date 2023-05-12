import { AxiosResponse } from 'axios'
import { Question, Quiz } from '../../logic/types/domains/study'
import { ModelApiService } from '../common/ModelService'
import {
  CreateQuestionInput,
  ReorderQuizInput,
} from '../../logic/types/forms/study'
import { Paginated } from '../../logic/types/domains/common'

export default class QuizzesApi extends ModelApiService {
  constructor() {
    super('study/quizzes')
  }

  public async getQuestions(quizId: string) {
    try {
      const response: AxiosResponse<Paginated<
        Question
      >> = await this.axiosInstance.get(this.getUrl() + `/${quizId}/questions`)

      return response
    } catch (err) {
      this.handleErrors(err)
      if (err.response) {
      }
    }
  }

  public async getQuestion(quizId: string, questionId: string) {
    try {
      const response: AxiosResponse<Question> = await this.axiosInstance.get(
        this.getUrl() + `/${quizId}/questions/${questionId}`,
      )

      return response
    } catch (err) {
      this.handleErrors(err)
      if (err.response) {
      }
    }
  }

  public async createQuestion(quizId: string, data: CreateQuestionInput) {
    try {
      const response: AxiosResponse<Question> = await this.axiosInstance.post(
        this.getUrl() + `/${quizId}/questions`,
        data,
      )

      return response
    } catch (err) {
      this.handleErrors(err)
      if (err.response) {
      }
    }
  }

  public async publishQuiz(quizId: string) {
    try {
      const response: AxiosResponse<Quiz> = await this.axiosInstance.post(
        this.getUrl() + `/${quizId}/publish`,
      )

      return response
    } catch (err) {
      this.handleErrors(err)
      if (err.response) {
      }
    }
  }

  public async reorderQuiz(quizId: string, data: ReorderQuizInput) {
    try {
      const response: AxiosResponse<Quiz> = await this.axiosInstance.post(
        this.getUrl() + `/${quizId}/reorder`,
        data,
      )

      return response
    } catch (err) {
      this.handleErrors(err)
      if (err.response) {
      }
    }
  }

  public async updateQuestion(quizId: string, data: CreateQuestionInput) {
    try {
      const questionId = data.id

      data.id = undefined
      const response: AxiosResponse<Question> = await this.axiosInstance.put(
        this.getUrl() + `/${quizId}/questions/${questionId}`,
        data,
      )

      return response
    } catch (err) {
      this.handleErrors(err)
      if (err.response) {
      }
    }
  }

  public async deleteQuestion(quizId: string, questionId: string) {
    try {
      const response: AxiosResponse<boolean> = await this.axiosInstance.delete(
        this.getUrl() + `/${quizId}/questions/${questionId}`,
      )

      return response
    } catch (err) {
      this.handleErrors(err)
      if (err.response) {
      }
    }
  }
}
