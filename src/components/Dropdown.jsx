import React, { useState } from 'react'

const Dropdown = ({ options, selection, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  const handleOptionClick = (option) => {
    // close dropdow
    setIsOpen(false)
    // show option selected
    // console.log(option)
    onSelect(option)
  }

  const renderedOptions = options.map((option) => {
    return (
      <div onClick={() => handleOptionClick(option)} key={option.value}>
        {option.label}
      </div>
    )
  })

  /*
  === modify it to --- {selection?.label || 'Select...'}
  let content = 'Select...'
  if (selection) {
    content = selection.label
  }
  === the return part used to be:
  <div onClick={handleClick}>{content}</div>
  */

  return (
    <div>
      <div onClick={handleClick}>{selection?.label || 'Select...'}</div>
      {isOpen && <div>{renderedOptions}</div>}
    </div>
  )
}

export default Dropdown
