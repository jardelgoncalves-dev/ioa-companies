import styled, { css } from 'styled-components'

const common = css`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const Wrapper = styled.div.attrs({
  className: 'ioa-input',
})`
  ${common};
  max-width: 24.75rem;
  width: 100%;
  height: 3rem;
  border-bottom: 1px solid
    ${({ withError }) =>
      withError ? 'var(--neon-red)' : 'var(--charcoal-grey)'};

  input {
    flex: 1;
    width: 100%;
    height: 100%;
    color: var(--charcoal-grey);
    background-color: transparent;
    border: none;
    padding: 0 1rem;
    font-size: 1.2rem;
  }

  &__with-error,
  &__icon {
    ${common};
    justify-content: center;
    height: auto;
    width: 27px;
  }

  button {
    background-color: transparent;
    border: none;
    pointer-events: none;
  }

  button.--clickable {
    cursor: pointer;
    pointer-events: all;
  }
`
