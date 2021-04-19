import { CompaniesConstants } from '../types'

const INITIAL_STATE = {
  companies: [],
  errorMessage: '',
  isLoading: false,
}

const companiesReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action

  switch (type) {
    case CompaniesConstants.COMPANIES_CALLBACK_REQUEST:
      return {
        ...state,
        isLoading: true,
      }
    case CompaniesConstants.COMPANIES_CALLBACK_SUCCESS:
      return {
        companies: payload,
        errorMessage: '',
        isLoading: false,
      }
    case CompaniesConstants.COMPANIES_CALLBACK_ERROR:
      return {
        ...state,
        errorMessage: payload,
        isLoading: false,
      }
    default:
      return state
  }
}

export default companiesReducer
