import React from 'react'
import { Card as CardComponent } from '../components/Card'

export default {
  title: 'UI/Card',
  component: CardComponent,
}

const Template = (args) => <CardComponent {...args} />

export const Card = Template.bind({})
Card.args = {
  item: {
    id: 1,
    enterprise_name: 'Fluoretiq Limited',
    photo: '/uploads/enterprise/photo/1/240.jpeg',
    country: 'UK',
    enterprise_type: {
      id: 3,
      enterprise_type_name: 'Health',
    },
  },
}
