import { Login } from './pages/Login'
import { ColorsStyle } from './styles/colors'
import { GlobalStyle } from './styles/global-style'

function App() {
  return (
    <div className="app">
      <ColorsStyle />
      <GlobalStyle />
      <Login />
    </div>
  )
}

export default App
