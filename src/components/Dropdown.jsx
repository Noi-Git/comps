import React, { useState } from 'react'
import { GoChevronDown, GoChevronLeft } from 'react-icons/go'

const Dropdown = ({ options, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  const handleOptionClick = (option) => {
    // close dropdow
    setIsOpen(false)
    // show option selected
    // console.log(option)
    onChange(option)
  }

  const renderedOptions = options.map((option) => {
    return (
      <div
        className='hover:bg-sky-100 rounded-lg cursor-pointer p-1'
        onClick={() => handleOptionClick(option)}
        key={option.value}
      >
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
    <div className='w-48 relative'>
      <div
        className='flex justify-between items-center cursor-pointer border rounded-lg p-3 shadow bg-white w-full'
        onClick={handleClick}
      >
        {value?.label || 'Select...'}
        <GoChevronDown className='text-lg' />
      </div>
      {isOpen && (
        <div className='absolute top-full border rounded-lg p-3 shadow bg-white w-full'>
          {renderedOptions}
        </div>
      )}
    </div>
  )
}

export default Dropdown
