import React from 'react'
import { SearchBar as SearchBarComponent } from '../components/SearchBar'

export default {
  title: 'UI/SearchBar',
  component: SearchBarComponent,
}

const Template = (args) => <SearchBarComponent {...args} />

export const SearchBar = Template.bind({})
SearchBar.args = {
  value: '',
  placeholder: 'Email',
  expanded: true,
}
