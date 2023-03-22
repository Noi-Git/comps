import React from 'react'
import PropTypes from 'prop-types'

const Button = ({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
}) => {
  return <button>{children}</button>
}

Button.propTypes = {
  checkVariationValue: ({
    primary,
    secondary,
    success,
    warning,
    danger,
    outline,
    rounded,
  }) => {
    // console.log(props)
    // check if more than one type of button value is provided
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!warning) +
      Number(!!success) +
      Number(!!danger)

    if (count > 1) {
      return new Error(
        'Only one of primary, secondary,success,warning,danger can be true'
      )
    }
  },
}

export default Button
