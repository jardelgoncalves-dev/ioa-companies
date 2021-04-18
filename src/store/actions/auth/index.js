import {
  authCallbackRequest,
  authCallbackSucess,
  authCallbackError,
} from './dispatches'
import api from '../../../services/api'

import { removeCredentials, setCredentials } from '../../../services/auth'

export function authenticate(data, history) {
  return async (dispatch) => {
    try {
      await dispatch(authCallbackRequest())
      const response = await api.post('/users/auth/sign_in', data)
      await setCredentials(response.headers)
      await dispatch(authCallbackSucess(response.headers))
      history.push('/dashboard')
    } catch (error) {
      if (error.response && error.response.data && error.response.data.errors) {
        await dispatch(authCallbackError(error.response.data.errors[0]))
      } else {
        await dispatch(authCallbackError('Error interno do servidor'))
      }
      removeCredentials()
    }
  }
}
