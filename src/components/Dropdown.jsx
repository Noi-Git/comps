import React, { useState } from 'react'

const Dropdown = ({ options }) => {
  const [selected, setSelected] = useState(null)
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  const handleOptionClick = () => {
    // close dropdow
    setIsOpen(false)
  }

  const renderedOptions = options.map((option) => {
    return (
      <div onClick={handleOptionClick} key={option.value}>
        {option.label}
      </div>
    )
  })

  return (
    <div>
      <div onClick={handleClick}>Select...</div>
      {isOpen && <div>{renderedOptions}</div>}
    </div>
  )
}

export default Dropdown
