import React from 'react'
import { Input as InputComponent } from '../components/Input'

export default {
  title: 'UI/Input',
  component: InputComponent,
}

const Template = (args) => <InputComponent {...args} />

export const Input = Template.bind({})
Input.args = {
  value: '',
  placeholder: 'Email',
  iconLeft: 'email',
  iconRight: '',
  iconRightConfig: {
    clickable: false,
    onClick: () => 'Hello',
  },
  withError: false,
}
