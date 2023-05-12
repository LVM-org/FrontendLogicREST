import { $api } from '../../services'
import Common from './Common'
import { Logic } from '..'
import { Paginated } from '../types/domains/common'
import { Game, GameParticipantAnswer } from '../types/domains/plays'
import { QueryParams } from '../types/common'
import { Question } from '../types/domains/study'
import { AddQuestionAnswer, CreateGameInput } from '../types/forms/plays'

export default class Plays extends Common {
  constructor() {
    super()
  }

  public AllGames: Paginated<Game> | undefined
  public SingleGame: Game | undefined
  public AllParticipantAnswers: Paginated<GameParticipantAnswer> | undefined
  public ParticipantAnswer: GameParticipantAnswer | undefined
  public GameQuestions: Question[] | undefined

  // Form input
  public CreateGameForm: CreateGameInput | undefined
  public AnswerGameQuestionForm: AddQuestionAnswer | undefined

  public GetGames = (filters: QueryParams) => {
    return $api.plays.game.fetch(filters).then((response) => {
      this.AllGames = response.data
    })
  }

  public GetGameAnswers = (gameId: string, filters: QueryParams) => {
    return $api.plays.game.getGameAnswers(gameId, filters).then((response) => {
      this.AllParticipantAnswers = response.data
    })
  }

  public GetGame = (id: string) => {
    return $api.plays.game.get(id).then((response) => {
      this.SingleGame = response.data
    })
  }

  public GetParticipantAnswer = (gameId: string, participantId: string) => {
    return $api.plays.game
      .getParticipantAnswer(gameId, participantId)
      .then((response) => {
        this.ParticipantAnswer = response.data
      })
  }

  public GetQuizQuestions = (gameId: string) => {
    return $api.plays.game.getGameQuestions(gameId).then((response) => {
      this.GameQuestions = response.data
    })
  }

  public CreateGame = (formIsValid: boolean) => {
    if (formIsValid && this.CreateGameForm) {
      return $api.plays.game
        .post(null, this.CreateGameForm)
        .then((response) => {
          this.SingleGame = response.data
        })
        .catch((error) => {
          //
        })
    }
  }

  public JoinGame = (gameId: string, join: boolean) => {
    return $api.plays.game
      .joinGame(gameId, { join })
      .then((response) => {
        this.SingleGame = response.data
      })
      .catch((error) => {
        //
      })
  }

  public StartGame = (gameId: string) => {
    return $api.plays.game
      .startGame(gameId)
      .then((response) => {
        this.SingleGame = response.data
      })
      .catch((error) => {
        //
      })
  }

  public AnswerGameQuestion = (gameId: string) => {
    if (this.AnswerGameQuestionForm) {
      return $api.plays.game
        .answerGameQuestion(gameId, this.AnswerGameQuestionForm)
        .then((response) => {
          this.ParticipantAnswer = response.data
        })
        .catch((error) => {
          //
        })
    }
  }

  public DeleteGame = (id: string) => {
    return $api.plays.game
      .delete(id)
      .then((response) => {
        //
      })
      .catch((error) => {
        //
      })
  }
}
