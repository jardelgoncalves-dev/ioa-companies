import _ from 'lodash'
import {
  companiesCallbackRequest,
  companiesCallbackError,
  companiesCallbackSucess,
} from './dispatches'
import api from '../../../services/api'

import { removeCredentials } from '../../../services/auth'

const debounceFn = _.debounce(
  (dispatch, query) =>
    setTimeout(async () => {
      try {
        await dispatch(companiesCallbackRequest())
        if (!query) {
          await dispatch(companiesCallbackSucess([]))
          return
        }
        const { data } = await api.get(`/enterprises?name=${query}`)
        await dispatch(companiesCallbackSucess(data.enterprises))
      } catch (error) {
        if (error.response && error.response.status === 401) {
          removeCredentials()
          await dispatch(companiesCallbackError(error.response.data.errors[0]))
        } else {
          await dispatch(companiesCallbackError('Error interno do servidor'))
        }
      }
    }, 300),
  400
)

export const fetch = (query) => (dispatch) => debounceFn(dispatch, query)
