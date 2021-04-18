import {
  authCallbackRequest,
  authCallbackSucess,
  authCallbackError,
} from './dispatches'
import api from '../../../services/api'

export function authenticate(data) {
  return async (dispatch) => {
    try {
      dispatch(authCallbackRequest())
      const response = await api.post('/users/auth/sign_in', data)
      dispatch(authCallbackSucess(response.headers))
    } catch (error) {
      if (error.response && error.response.data && error.response.data.errors) {
        dispatch(authCallbackError(error.response.data.errors[0]))
        return
      }
      dispatch(authCallbackError('Error interno do servidor'))
    }
  }
}
