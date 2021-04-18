import PropTypes from 'prop-types'

import { Icon } from '../Icon';
import { Wrapper } from './styles'

function SearchBar({
  name,
  value,
  onChange,
  placeholder,
  expanded,
  onExpand,
  onClose
}) {
  return (
    <Wrapper className={`ioa-search ${expanded ? '--expanded': ''}`}>
      <button className="ioa-search__icon" type="button" onClick={onExpand}>
        <Icon name="search" />
      </button>
      <input
        name={name}
        type="text"
        className="ioa-search__elem"
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
      <button
        className="ioa-search__icon icon-close"
        type="button"
        onClick={onClose}
      >
        <Icon name="close" />
      </button>
    </Wrapper>
  )
}

SearchBar.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  expanded: PropTypes.bool,
  onExpand: PropTypes.func,
  onClose: PropTypes.func,
}


export { SearchBar }