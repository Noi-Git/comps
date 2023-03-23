import React from 'react'
import className from 'classnames'

const Button = ({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
  ...rest //collect all the remaining properties
}) => {
  // rest.className --- will allow you to add normal className as normal
  const classes = className(
    rest.className,
    'flex items-center px-3 py-1.5 border',
    {
      'border-blue-500 bg-blue-500 text-white': primary,
      'border-gray-900 bg-gray-900 text-white': secondary,
      'border-green-500 bg-green-500 text-white': success,
      'border-yellow-400 bg-yellow-400 text-white': warning,
      'border-red-500 bg-red-500 text-white': danger,
      'rounded-lg': rounded,
      'bg-white': outline,
      'text-blue-600': outline && primary,
      'text-gray-500': outline && secondary,
      'text-green-600': outline && success,
      'text-yellow-600': outline && warning,
      'text-red-600': outline && danger,
    }
  )

  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  )
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
