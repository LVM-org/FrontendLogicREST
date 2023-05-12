import EmailApi from './EmailApi'
import IdentitiesApi from './IdentitiesApi'
import PasswordsApi from './PasswordsApi'
import PhoneApi from './PhoneApi'
import TokenApi from './TokenApi'
import UserApi from './UserApi'

export const AuthApi = {
  email: new EmailApi(),
  identities: new IdentitiesApi(),
  passwords: new PasswordsApi(),
  phone: new PhoneApi(),
  token: new TokenApi(),
  user: new UserApi(),
}
