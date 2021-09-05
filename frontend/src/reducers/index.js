import { combineReducers } from 'redux'
import alert from './alert'
import auth from './auth'
import profile from './profile'
import job from './job'
import assessments from './assessments'

export default combineReducers({
  alert,
  auth,
  profile,
  job,
  assessments,
})
