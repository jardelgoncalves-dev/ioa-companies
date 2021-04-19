import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: 0 0 40px 0;

  .result-not-found {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 80px;

    svg {
      width: 300px;
      height: 300px;
    }
  }

  .company__content {
    margin: 40px;
    background-color: var(--white);
    padding: 80px;
    &__img {
      width: 100%;
      height: 400px;
      object-fit: cover;
    }
    &__description {
      margin-top: 1rem;
      line-height: normal;
      font-size: 1.4rem;
      color: var(--warm-grey);
    }
  }

  @media only screen and (max-width: 720px) {
    .company__content {
      margin: 20px;
      padding: 20px;
    }
  }
`
