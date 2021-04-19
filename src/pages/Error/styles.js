import styled from 'styled-components'

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 90px 20px;

  svg {
    max-width: 300px;
    width: 100%;
  }
  h1 {
    color: var(--medium-pink);
    font-size: 3rem;
  }
  span {
    margin-top: 0.5rem;
  }
`
