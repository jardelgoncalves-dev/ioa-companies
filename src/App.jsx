import { Provider } from 'react-redux';
import Login from './pages/Login'
import { ColorsStyle } from './styles/colors'
import { GlobalStyle } from './styles/global-style'

import { store } from './store'

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <ColorsStyle />
        <GlobalStyle />
        <Login />
      </div>
    </Provider>
  )
}

export default App
