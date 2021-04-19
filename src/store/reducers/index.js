import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import history from '../history'

import auth from './auth'
import companies from './companies'

export default combineReducers({
  auth,
  companies,
  router: connectRouter(history),
})
