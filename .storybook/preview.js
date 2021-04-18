import { ColorsStyle } from '../src/styles/colors'
import { GlobalStyle } from '../src/styles/global-style'

export const parameters = {
  backgrounds: {
    default: 'ioasys',
    values: [
      {
        name: 'ioasys',
        value: '#eeecdb',
      },
      {
        name: 'ioasys-pink',
        value: '#ee4c77',
      },
    ],
  },
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

const withThemeProvider = (Story, context) => {
  return (
    <>
      <ColorsStyle />
      <GlobalStyle />
      <Story {...context} />
    </>
  )
}
export const decorators = [withThemeProvider]
