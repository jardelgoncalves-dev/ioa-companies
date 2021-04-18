import styled, { css } from 'styled-components'

const common = css`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const Wrapper = styled.div.attrs({
  className: 'ioa-search',
})`
  ${common};
  width: 40px;
  height: 3rem;
  border: 0 solid #fff;
  transition: all 0.3s;

  input {
    height: 100%;
    color: var(--white);
    background-color: transparent;
    border: none;
    padding: 0 0.75rem;
    font-size: 1.2rem;
    width: 0;
    &::placeholder {
      color: var(--rouge);
      font-weight: bold;
    }
  }

  .ioa-search__with-error,
  .ioa-search__icon {
    ${common};
    justify-content: center;
    height: auto;
    svg {
      width: 35px;
    }
  }

  .icon-close {
    display: none;
  }

  button {
    border: none;
    background-color: transparent;
    cursor: pointer;
  }

  &.--expanded {
    transition: all 0.3s;
    border-bottom: 1px solid var(--white);
    width: 100%;

    input {
      flex: 1;
      width: 100%;
    }

    .icon-close {
      display: flex;
    }
  }
`
