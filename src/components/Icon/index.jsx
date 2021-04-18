import PropTypes from 'prop-types'

import { ReactComponent as ReactPadlock } from './_icons/ic-cadeado.svg'
import { ReactComponent as ReactEmail } from './_icons/ic-email.svg'
import { ReactComponent as ReactEye } from './_icons/ic-eye.svg'
import { ReactComponent as ReactEyeOff } from './_icons/ic-eye-off.svg'
import { ReactComponent as ReactAlert } from './_icons/ic-alert.svg'

const icons = {
  padlock: <ReactPadlock />,
  email: <ReactEmail />,
  eye: <ReactEye />,
  'eye-off': <ReactEyeOff />,
  alert: <ReactAlert />,
}

function Icon({ name }) {
  return icons[name] || null
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
}

export { Icon }
