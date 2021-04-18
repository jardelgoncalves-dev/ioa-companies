import { useEffect, useState } from 'react'
import { isAuthenticated } from '../../services/auth'
import history from '../../store/history'

export const withLogic = (Component) => (props) => {
  const { authenticate } = props

  const [form, setForm] = useState({
    email: '',
    password: '',
  })
  const [passwordVisible, setPasswordVisible] = useState(false)

  useEffect(() => {
    if (isAuthenticated()) {
      history.push('/dashboard')
    }
  }, [])

  const showPassword = () => setPasswordVisible(!passwordVisible)
  const onSubmit = async (data) => {
    authenticate(data, history)
  }

  const onInputChange = (event) => {
    const { name, value } = event.target
    setForm((old) => ({
      ...old,
      [name]: value,
    }))
  }
  return (
    <Component
      {...props}
      form={form}
      passwordVisible={passwordVisible}
      showPassword={showPassword}
      onInputChange={onInputChange}
      onSubmit={onSubmit}
    />
  )
}
