import React from 'react'
import { Icon as IconComponent } from '../components/Icon'

export default {
  title: 'UI/Icon',
  component: IconComponent,
  argTypes: {
    name: {
      control: {
        type: 'radio',
        options: [
          'padlock',
          'email',
          'eye',
          'eye-off',
          'alert',
          'search',
          'arrow-left',
          'close',
        ],
      },
    },
  },
}

const Template = (args) => <IconComponent {...args} />

export const Icon = Template.bind({})
Icon.args = {
  name: 'padlock',
}
