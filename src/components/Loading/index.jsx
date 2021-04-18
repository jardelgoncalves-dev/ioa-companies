import PropTypes from 'prop-types';

import { Wrapper } from './styles'

function Loading({ isLoading }) {
  return (
    <Wrapper
      isLoading={isLoading}
    >
      <div className="loading"><div /><div /><div /><div /></div>
    </Wrapper>
  )
}

Loading.propTypes = {
  isLoading: PropTypes.bool
}

export { Loading }