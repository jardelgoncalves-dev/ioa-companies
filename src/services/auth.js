import { CREDENTIALS } from '../utils/constants'

export const isAuthenticated = () => localStorage.getItem(CREDENTIALS) !== null

export const getCredentials = () => {
  const credentials = localStorage.getItem(CREDENTIALS)
  return credentials ? JSON.parse(credentials) : {}
}

export const setCredentials = (credentials) => {
  const { client, uid } = credentials || {}
  localStorage.setItem(
    CREDENTIALS,
    JSON.stringify({
      client,
      uid,
      'access-token': (credentials || {})['access-token'],
    })
  )
}

export const removeCredentials = () => {
  localStorage.removeItem(CREDENTIALS)
}
