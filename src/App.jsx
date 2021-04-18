import { Provider } from 'react-redux';
import { ColorsStyle } from './styles/colors'
import { GlobalStyle } from './styles/global-style'

import { store } from './store'
import { Router } from './routes';

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <ColorsStyle />
        <GlobalStyle />
        <Router />
      </div>
    </Provider>
  )
}

export default App
