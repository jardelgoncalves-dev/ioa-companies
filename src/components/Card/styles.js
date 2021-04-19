import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Wrapper = styled(Link)`
  display: flex;
  flex: 50%;
  max-width: 50%;
  height: 13rem;
  margin-bottom: 1rem;
  padding: 0.5rem;
  cursor: pointer;
  text-decoration: none;

  .ioa-card {
    padding: 1rem;
    flex: 1;
    display: flex;
    background-color: var(--white);
    align-items: flex-start;
    &__img {
      width: 40%;
      height: 100%;
      object-fit: cover;
    }

    &__info {
      margin-left: 1rem;
      display: flex;
      flex: 1;
      width: 100%;
      height: 100%;
      flex-direction: column;
      justify-content: center;

      &__name {
        font-size: 1.5rem;
        font-weight: bold;
        color: var(--dark-indigo);
      }

      &__operate {
        font-size: 1.2rem;
        font-weight: normal;
        color: var(--warm-grey);
        margin: 0.4rem 0;
      }

      &__country {
        font-size: 0.875rem;
        color: var(--warm-grey);
      }
    }
  }

  @media only screen and (max-width: 1000px) {
    display: flex;
    flex: 100%;
    max-width: 100%;
  }
`
