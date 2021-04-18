import { AuthConstants } from '../types'

const INITIAL_STATE = {
  accessToken: '',
  client: '',
  uid: '',
  errorMessage: '',
  isLogged: false,
  isLoading: false,
}

const authReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action

  switch (type) {
    case AuthConstants.AUTH_CALLBACK_REQUEST:
      return {
        ...state,
        isLoading: true,
      }
    case AuthConstants.AUTH_CALLBACK_ERROR:
      return {
        ...state,
        accessToken: '',
        client: '',
        uid: '',
        errorMessage: payload,
        isLogged: false,
        isLoading: false,
      }
    case AuthConstants.AUTH_CALLBACK_SUCCESS:
      return {
        ...state,
        accessToken: payload['access-token'],
        client: payload.client,
        uid: payload.uid,
        errorMessage: '',
        isLogged: true,
        isLoading: false,
      }
    default:
      return state
  }
}

export default authReducer
