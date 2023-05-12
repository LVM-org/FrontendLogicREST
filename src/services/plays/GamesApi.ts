import { AddQuestionAnswer } from './../../logic/types/forms/plays'
import { AxiosResponse } from 'axios'
import { AuthResponse } from '../../logic/types/domains/auth'
import { ModelApiService } from '../common/ModelService'
import { Game, GameParticipantAnswer } from '../../logic/types/domains/plays'
import { Question } from '../../logic/types/domains/study'
import { Paginated } from '../../logic/types/domains/common'
import { QueryParams } from '../../logic/types/common'

export default class GamesApi extends ModelApiService {
  constructor() {
    super('plays/games')
  }

  public async getParticipantAnswer(gameId: string, participantId: string) {
    try {
      const response: AxiosResponse<GameParticipantAnswer> = await this.axiosInstance.get(
        this.getUrl() + `/${gameId}/answers/${participantId}`,
      )

      return response
    } catch (err) {
      this.handleErrors(err)
      if (err.response) {
      }
    }
  }

  public async getGameAnswers(gameId: string, filters: QueryParams) {
    try {
      const response: AxiosResponse<Paginated<
        GameParticipantAnswer
      >> = await this.axiosInstance.get(this.getUrl() + `/${gameId}/answers`, {
        params: filters,
      })

      return response
    } catch (err) {
      this.handleErrors(err)
      if (err.response) {
      }
    }
  }

  public async getGameQuestions(gameId: string) {
    try {
      const response: AxiosResponse<Question[]> = await this.axiosInstance.get(
        this.getUrl() + `/${gameId}/questions`,
      )

      return response
    } catch (err) {
      this.handleErrors(err)
      if (err.response) {
      }
    }
  }

  public async joinGame(
    gameId: string,
    data: {
      join: boolean
    },
  ) {
    try {
      const response: AxiosResponse<Game> = await this.axiosInstance.post(
        this.getUrl() + `/${gameId}/join`,
        data,
      )

      return response
    } catch (err) {
      this.handleErrors(err)
      if (err.response) {
      }
    }
  }

  public async startGame(gameId: string) {
    try {
      const response: AxiosResponse<Game> = await this.axiosInstance.post(
        this.getUrl() + `/${gameId}/start`,
      )

      return response
    } catch (err) {
      this.handleErrors(err)
      if (err.response) {
      }
    }
  }

  public async answerGameQuestion(gameId: string, data: AddQuestionAnswer) {
    try {
      const response: AxiosResponse<GameParticipantAnswer> = await this.axiosInstance.post(
        this.getUrl() + `/${gameId}/answers`,
      )

      return response
    } catch (err) {
      this.handleErrors(err)
      if (err.response) {
      }
    }
  }
}
