import { Switch, Route } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'

import Login from '../pages/Login'
import Dashboard from '../pages/Dashboard'
import PageError from '../pages/Error'

import PrivateRoute from './PrivateRouter'

import history from '../store/history'

export const Router = () => (
    <ConnectedRouter history={history}>
      <Switch>
        <Route component={Login} path="/" exact />
        <PrivateRoute
          exact
          component={Dashboard}
          path="/dashboard"
        />
        <Route component={PageError} path="*" />
      </Switch>
    </ConnectedRouter>
  )

