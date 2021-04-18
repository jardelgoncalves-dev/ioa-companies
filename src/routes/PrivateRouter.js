import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

const PrivateRoute = ({ component: Component, path, authState, ...rest }) => (
  <Route
    path={path}
    {...rest}
    render={(props) =>
      authState.isLogged ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/',
          }}
        />
      )
    }
  />
)

const mapStateToProps = (state) => ({
  authState: state.auth,
})

export default connect(mapStateToProps, {})(PrivateRoute)
