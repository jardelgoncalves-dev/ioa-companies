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
  max-width: 20.75rem;
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
    padding: 0 0.75rem;
    font-size: 1.2rem;
  }

  .ioa-input__with-error,
  .ioa-input__icon {
    ${common};
    justify-content: center;
    height: auto;
    width: 27px;
    svg {
      width: 22px;
    }
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
