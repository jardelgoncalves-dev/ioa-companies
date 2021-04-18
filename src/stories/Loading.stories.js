import React from 'react'
import { Loading as LoadingComponent } from '../components/Loading'

export default {
  title: 'UI/Loading',
  component: LoadingComponent,
}

const Template = (args) => <LoadingComponent {...args} />

export const Loading = Template.bind({})
Loading.args = {
  isLoading: true,
}
