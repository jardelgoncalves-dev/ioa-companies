import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import history from '../history'

import auth from './auth'

export default combineReducers({
  auth,
  router: connectRouter(history),
})
