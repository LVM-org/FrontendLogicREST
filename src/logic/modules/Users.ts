import { $api } from '../../services'
import Common from './Common'
import { Logic } from '..'
import { Paginated } from '../types/domains/common'
import { User } from '../types/domains/auth'
import { QueryParams } from '../types/common'
import {
  CreateVerificationInput,
  CustomizeAIInput,
  UpdateUserAspirantInput,
  UpdateUserCollegeInput,
  UpdateUserTeacherInput,
  VerificationStatusInput,
} from '../types/forms/users'
import { SingleUser, UserVerification } from '../types/domains/users'

export default class Users extends Common {
  constructor() {
    super()
  }

  public AllUsers: Paginated<User> | undefined
  public SingleUser: SingleUser | undefined
  public Verification: UserVerification | undefined
  public Verifications: Paginated<UserVerification> | undefined

  // form inputs
  public CustomizeAIForm: CustomizeAIInput | undefined
  public UpdateUserForm:
    | UpdateUserCollegeInput
    | UpdateUserTeacherInput
    | UpdateUserAspirantInput
    | undefined
  public CreateVerificationForm: CreateVerificationInput | undefined
  public UpdateUserVerificationForm: VerificationStatusInput | undefined

  public GetUsers = (filters: QueryParams) => {
    return $api.users.users.fetch(filters).then((response) => {
      this.AllUsers = response.data
    })
  }

  public GetVerifications = (filters: QueryParams) => {
    return $api.users.verifications.fetch(filters).then((response) => {
      this.Verifications = response.data
    })
  }

  public GetVerification = (id: string) => {
    return $api.users.verifications.get(id).then((response) => {
      this.Verification = response.data
    })
  }

  public GetUser = (id: string) => {
    return $api.users.users.get(id).then((response) => {
      this.SingleUser = response.data
    })
  }

  public CustomizeAI = (formIsValid: boolean) => {
    if (formIsValid && this.CustomizeAIForm) {
      return $api.users.users
        .customizeUserAI(this.CustomizeAIForm)
        .then((response) => {
          this.SingleUser = response.data
        })
        .catch((error) => {
          //
        })
    }
  }

  public UpdateUser = (formIsValid: boolean) => {
    if (formIsValid && this.UpdateUserForm) {
      Logic.Common.showLoader({
        loading: true,
        show: true,
        useModal: true,
      })
      return $api.users.users
        .updateUser(this.UpdateUserForm)
        .then((response) => {
          this.SingleUser = response.data
          Logic.Common.hideLoader()
        })
        .catch((error) => {
          throw error
        })
    }
  }

  public CreateVerification = (formIsValid: boolean) => {
    if (formIsValid && this.CreateVerificationForm) {
      $api.users.verifications
        .createVerification(this.CreateVerificationForm)
        .then((response) => {
          this.Verification = response.data
        })
    }
  }

  public UpdateUserVerification = (formIsValid: boolean) => {
    if (formIsValid && this.UpdateUserVerificationForm) {
      return $api.users.verifications
        .updateUserVerification(this.UpdateUserVerificationForm)
        .then((response) => {
          //
        })
        .catch((error) => {
          //
        })
    }
  }
}
