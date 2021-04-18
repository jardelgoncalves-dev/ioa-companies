import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { withLogic } from './withLogic';

import { Input } from '../../components/Input'
import { RaisedButton } from '../../components/Button'
import { Loading } from '../../components/Loading'
import { Wrapper } from './styles'

import * as AuthAction from "../../store/actions/auth/index";

import LogoImg from '../../assets/logo-home.png'

function Login({
  form,
  passwordVisible,
  showPassword,
  onInputChange,
  onSubmit,
  authState,
}) {
  return (
      <Wrapper>
        <Loading isLoading={authState.isLoading} />
        <div className="login-page__content">
          <img className="login-page__content__img" src={LogoImg} alt="Ioasys Logo" />
          <div className="login-page__content__description">
            <h1 className="login-page__content__description__title">
              Bem-vindo ao<br />Empresas
            </h1>
            <p className="login-page__content__description__subtitle">
              Lorem ipsum dolor sit amet, contetur<br />adipiscing elit. Nunc accumsan.
            </p>
          </div>
          <div className="login-page__content__form">
            <Input
              withError={!!authState.errorMessage}
              name="email"
              placeholder="Email"
              iconLeft="email"
              onChange={onInputChange}
            />
            <Input
              withError={!!authState.errorMessage}
              name="password"
              type={passwordVisible ? 'text' : 'password'}
              placeholder="Senha"
              iconLeft="padlock"
              iconRight={passwordVisible ? 'eye' : 'eye-off'}
              onChange={onInputChange}
              iconRightConfig={{
                clickable: true,
                onClick: showPassword,
              }}
            />
            {authState.errorMessage && (
              <div className="login-page__content__form__error">
                {authState.errorMessage}
              </div>
            )}
            <RaisedButton
              text="Entrar"
              onPress={() => onSubmit(form)}
              disabled={!!(!form || !form.email || !form.password)}
            />
          </div>
        </div>
      </Wrapper>
  )
}

Login.propTypes = {
  onInputChange: PropTypes.func,
  onSubmit: PropTypes.func,
  showPassword: PropTypes.func,
  passwordVisible: PropTypes.bool,
  form: PropTypes.shape({
    email: PropTypes.string,
    password: PropTypes.string,
  }),
  authState: PropTypes.shape({
    errorMessage: PropTypes.string,
    isLoading: PropTypes.bool,
  })
}

const mapStateToProps = (state) => ({
  authState: state.auth,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ ...AuthAction, }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(withLogic(Login));