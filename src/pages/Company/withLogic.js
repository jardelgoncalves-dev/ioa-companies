import { useEffect, useState } from 'react'

import history from '../../store/history'
import api from '../../services/api'

export const withLogic = (Component) => (props) => {
  const {
    match: { params },
  } = props

  const [notFound, setNotFound] = useState(false)
  const [company, setCompany] = useState([])

  useEffect(() => {
    if (!params || !params.id) {
      history.push('/dashboard/error')
      return
    }

    ;(async () => {
      setNotFound(false)
      try {
        const response = await api.get(`/enterprises/${params.id}`)
        setCompany(response.data.enterprise)
      } catch (error) {
        setNotFound(true)
      }
    })()
  }, [])

  const goBack = () => {
    history.push('/dashboard')
  }

  return (
    <Component
      {...props}
      notFound={notFound}
      company={company}
      goBack={goBack}
    />
  )
}
