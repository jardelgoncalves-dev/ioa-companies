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
    description:
      'FluoretiQ is a Bristol based medtech start-up developing diagnostic technology to enable bacteria identification within the average consultation window, so that patients can get the right anti-biotics from the start.  ',
    email_enterprise: null,
    facebook: null,
    twitter: null,
    linkedin: null,
    phone: null,
    own_enterprise: false,
    photo: '/uploads/enterprise/photo/1/240.jpeg',
    value: 0,
    shares: 100,
    share_price: 10000.0,
    own_shares: 0,
    city: 'Bristol',
    country: 'UK',
    enterprise_type: {
      id: 3,
      enterprise_type_name: 'Health',
    },
  },
}
