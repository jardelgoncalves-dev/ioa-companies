import PropTypes from 'prop-types'
import { Wrapper } from './styles'

 function Container({ children }) {
  return <Wrapper>{children}</Wrapper>
}

Container.propTypes = {
  children: PropTypes.element
}

export { Container }