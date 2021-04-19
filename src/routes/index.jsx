import { Switch, Route } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'

import Login from '../pages/Login'
import Dashboard from '../pages/Dashboard'
import Company from '../pages/Company'
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
        <PrivateRoute
          exact
          component={Company}
          path="/dashboard/company/:id"
        />
        <Route component={PageError} path="*" />
      </Switch>
    </ConnectedRouter>
  )

