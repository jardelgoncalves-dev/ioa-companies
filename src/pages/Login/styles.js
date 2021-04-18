import styled from 'styled-components'

export const Wrapper = styled.div.attrs({
  className: 'login-page',
})`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;

  .login-page__content {
    margin: 50px 16px;

    max-width: 700px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    &__img {
      height: 50px;
      width: auto;
    }

    &__description {
      margin-top: 3.5rem;
      color: var(--charcoal-grey);
      text-align: center;

      &__title {
        text-transform: uppercase;
        font-size: 1.6rem;
        line-height: normal;
        letter-spacing: -1.2px;
      }
      &__subtitle {
        margin-top: 1.5rem;
        font-size: 1rem;
        line-height: 1.48;
        letter-spacing: 0.2px;
      }
    }
    &__form {
      margin-top: 3rem;
      .ioa-input + .ioa-input {
        margin-top: 1rem;
        margin-bottom: 1.2rem;
      }
      &__error {
        color: var(--neon-red);
        font-size: 0.8rem;
        line-height: 1.95;
        letter-spacing: -0.17px;
        text-align: center;
      }
      .ioa-raised-button {
        margin-top: 1.2rem;
      }
    }
  }
`
