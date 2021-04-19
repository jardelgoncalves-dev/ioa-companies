/* eslint-disable no-param-reassign */
import axios from 'axios'
import { getCredentials } from './auth'

const api = axios.create({
  baseURL: 'https://empresas.ioasys.com.br/api/v1',
  headers: {
    'Content-Type': 'application/json',
  },
})

api.interceptors.request.use(async (config) => {
  const credentials = getCredentials()
  if (credentials) {
    config.headers.uid = credentials.uid
    config.headers['access-token'] = credentials['access-token']
    config.headers.client = credentials.client
  }
  return config
})

export default api
