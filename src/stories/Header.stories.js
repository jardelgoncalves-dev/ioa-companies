import React from 'react'
import { Header as HeaderComponent } from '../components/Header'

export default {
  title: 'UI/Header',
  component: HeaderComponent,
}

const Template = (args) => <HeaderComponent {...args} />

export const Header = Template.bind({})
Header.args = {
  valueSearch: '',
  isGoback: false,
  textGoBack: 'Empresa 1',
}
