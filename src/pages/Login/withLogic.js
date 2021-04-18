/* eslint-disable */
import { useState } from 'react'

export const withLogic = (Component) => (props) => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  })
  const [passwordVisible, setPasswordVisible] = useState(false)

  const showPassword = () => setPasswordVisible(!passwordVisible)

  const onSubmit = (data, authenticate) => {
    authenticate(data)
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
