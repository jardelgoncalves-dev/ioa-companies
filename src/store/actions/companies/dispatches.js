import { CompaniesConstants } from '../../types'

export const companiesCallbackRequest = () => ({
  type: CompaniesConstants.COMPANIES_CALLBACK_REQUEST,
})

export const companiesCallbackError = (errorMessage) => ({
  type: CompaniesConstants.COMPANIES_CALLBACK_ERROR,
  payload: errorMessage,
})

export const companiesCallbackSucess = (companies) => ({
  type: CompaniesConstants.COMPANIES_CALLBACK_SUCCESS,
  payload: companies || [],
})
