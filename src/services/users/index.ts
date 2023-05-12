import UsersApi from './UsersApi'
import VerificationsApi from './VerificationsApi'

export const UserApi = {
  users: new UsersApi(),
  verifications: new VerificationsApi(),
}
