import PropTypes from 'prop-types';
import { Wrapper } from './styles'

function RaisedButton({ onPress, text, disabled }) {
  return (
    <Wrapper onClick={onPress} disabled={disabled}>
      {text}
    </Wrapper>
  )
}

RaisedButton.propTypes = {
  onPress: PropTypes.func,
  text: PropTypes.string.isRequired,
  disabled: PropTypes.bool
}

export {RaisedButton}