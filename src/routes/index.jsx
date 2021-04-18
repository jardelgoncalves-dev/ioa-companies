import { Switch, Route } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'

import Login from '../pages/Login'
import PrivateRoute from './PrivateRouter'

import history from '../store/history'

export const Router = () => (
    <ConnectedRouter history={history}>
      <Switch>
        <Route component={Login} path="/" exact />
        <PrivateRoute
          component={() => <h1>Hello</h1>}
          path="/dashboard"
        />
      </Switch>
    </ConnectedRouter>
  )

