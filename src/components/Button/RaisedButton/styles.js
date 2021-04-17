import styled from 'styled-components'

export const Wrapper = styled.button`
  width: 21.75rem;
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
    opacity: 0.4;
    pointer-events: none;
  }
`
