import React, { useState, useEffect, useRef } from 'react'
import { GoChevronDown } from 'react-icons/go'
import Panel from './Panel'

const Dropdown = ({ options, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false)
  const divEl = useRef()

  useEffect(() => {
    const handler = (event) => {
      // console.log(event.target)
      // console.log('---', divEl)
      if (!divEl.current.contains(event.target)) {
        setIsOpen(false)
      }
    }
    // listen to the click outside of the dropdown
    document.addEventListener('click', handler, true)

    // the below is a cleanup function
    // when dropdown is close, it will stop listening to the event
    return () => {
      document.removeEventListener('click', handler)
    }
  }, [])

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
        className='hover:bg-sky-100 rounded cursor-pointer p-1'
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
    <div ref={divEl} className='w-48 relative'>
      <Panel
        className='flex justify-between items-center cursor-pointer'
        onClick={handleClick}
      >
        {value?.label || 'Select...'}
        <GoChevronDown className='text-lg' />
      </Panel>
      {isOpen && <Panel className='absolute top-full'>{renderedOptions}</Panel>}
    </div>
  )
}

export default Dropdown
