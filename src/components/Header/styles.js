import styled from 'styled-components'

export const Wrapper = styled.div`
  background-image: linear-gradient(
    180deg,
    var(--medium-pink) 0%,
    var(--night-blue) 361.22%
  );

  height: 8rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;

  .ioa-header__content {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;

    &__img {
      transition: all 0.3s;

      width: 200px;
      height: auto;
    }

    .ioa-search {
      position: absolute;
      right: 0;
      top: 0;
      bottom: 0;
      margin: auto 0;
    }
    &.--no-logo {
      .ioa-header__content__img {
        transition: all 0.3s;
        width: 0;
      }
    }
  }
`
