import React from 'react'
import classNames from 'classnames'

const Panel = ({ children, className, ...rest }) => {
  const finalClassName = classNames(
    'border rounded p-3 shadow bg-white w-full',
    className
  ) // this const is use for store all reusable style that belong to Panel

  return (
    <div {...rest} className={finalClassName}>
      {children}
    </div>
  )
}

export default Panel
