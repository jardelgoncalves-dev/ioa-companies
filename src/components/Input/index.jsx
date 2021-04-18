import PropTypes from 'prop-types'

import { Icon } from '../Icon';
import { Wrapper } from './styles'

function Input({
  value,
  onChange,
  placeholder,
  iconLeft,
  iconRight,
  iconRightConfig,
  withError
}) {

  return (
    <Wrapper withError={withError}>
      {iconLeft && (
        <div className="ioa-input__icon">
          <Icon name={iconLeft} />
        </div>
      )}
      <input
      className="ioa-input__elem"
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
      {iconRight && !withError && (
        <button
          type="button"
          className={`ioa-input__icon ${(iconRightConfig || {}).clickable ? '--clickable': ''}`}
          onClick={(iconRightConfig || {}).onClick}
        >
          <Icon name={iconRight} />
        </button>
      )}
      {withError && (
        <div className="ioa-input__with-error">
          <Icon name="alert" />
        </div>
      )}
    </Wrapper>
  )
}

Input.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  iconLeft: PropTypes.string,
  iconRight: PropTypes.string,
  iconRightConfig: PropTypes.shape({
    clickable: PropTypes.bool,
    onClick: PropTypes.func
  }),
  withError: PropTypes.bool
}

export { Input }