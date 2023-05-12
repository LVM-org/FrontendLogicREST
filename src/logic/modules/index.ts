import Auth from './Auth'
import Common from './Common'
import Conversations from './Conversations'
import Form from './Form'
import Notifications from './Notifications'
import Payment from './Payment'
import Plays from './Plays'
import Schools from './Schools'
import Study from './Study'
import Users from './Users'

export const Logic = {
  Auth: new Auth(),
  Common: new Common(),
  Form: new Form(),
  Conversations: new Conversations(),
  Notifications: new Notifications(),
  Payment: new Payment(),
  Plays: new Plays(),
  Schools: new Schools(),
  Study: new Study(),
  Users: new Users(),
}
