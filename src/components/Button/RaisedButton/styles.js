import styled from 'styled-components'

export const Wrapper = styled.button.attrs({
  className: 'ioa-raised-button',
})`
  max-width: 20.75rem;
  width: 100%;
  height: 3.563rem;
  background-color: var(--greeny-blue);
  border: none;
  user-select: none;
  cursor: pointer;
  transition: opacity 0.2s;
  font-size: 1.208rem;
  color: var(--white);
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-transform: uppercase;

  &:hover {
    opacity: 0.8;
  }

  &:disabled {
    background-color: var(--grey);
    opacity: 0.56;
    pointer-events: none;
  }
`
