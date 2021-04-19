import styled from 'styled-components'

export const Wrapper = styled.div`
  position: relative;

  .info-text {
    width: 100%;
    height: 40vh;
    display: flex;
    align-items: center;
    justify-content: center;

    span {
      font-size: 1rem;
      line-height: 1.22;
      letter-spacing: -0.45px;
      text-align: center;
      color: var(--charcoal-grey);
    }
    .empty {
      color: var(--greyish);
    }
  }
`
