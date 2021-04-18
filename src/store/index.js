import { applyMiddleware, createStore } from 'redux'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import thunk from 'redux-thunk'

import {
  authCallbackRequest,
  authCallbackError,
  authCallbackSucess,
} from './actions/auth/dispatches'

import history from './history'
import rootReducer from './reducers'
import { getCredentials, isAuthenticated } from '../services/auth'

const middlewares = [routerMiddleware(history), thunk]

const store = createStore(
  connectRouter(history)(rootReducer),
  applyMiddleware(...middlewares)
)

store.dispatch(authCallbackRequest())
if (isAuthenticated()) {
  store.dispatch(authCallbackSucess(getCredentials()))
} else {
  store.dispatch(authCallbackError(''))
}

export { store }
