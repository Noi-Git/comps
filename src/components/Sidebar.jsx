import React from 'react'
import Link from './Link'

const Sidebar = () => {
  const links = [
    { label: 'Dropdown', path: '/' },
    { label: 'Accordion', path: '/accordion' },
    { label: 'Button', path: '/button' },
  ]

  const renderedLinks = links.map((link) => {
    return (
      <Link key={link.label} to={link.path}>
        {link.label}
      </Link>
    )
  })

  return (
    <div className='sticky top-0 overflow-y-scoll flex flex-col'>
      {renderedLinks}
    </div>
  )
}

export default Sidebar
