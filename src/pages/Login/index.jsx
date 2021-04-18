import { Input } from '../../components/Input'
import { RaisedButton } from '../../components/Button'

import { Wrapper } from './styles'

import LogoImg from '../../assets/logo-home.png'

function Login() {
  return (
      <Wrapper>
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
            <Input placeholder="Email" iconLeft="email" />
            <Input placeholder="Senha" iconLeft="padlock" iconRight="eye" />
            <div className="login-page__content__form__error">
              Credenciais informadas são inválidas, tente novamente.
            </div>
            <RaisedButton text="Entrar" />
          </div>
        </div>
      </Wrapper>
  )
}

export { Login }