import React, { useState } from 'react'

const Accordion = ({ items }) => {
  const [expandedIndex, setExpandedIndex] = useState(0)

  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex

    if (index === expandedIndex) {
      console.log('expanded')
    } else {
      console.log('collapsed')
    }

    return (
      <div key={item.id}>
        <div onClick={() => setExpandedIndex(index)}>{item.label}</div>
        {isExpanded && <div>{item.content}</div>}
      </div>
    )
  })

  return <div>{renderedItems}</div>
}

export default Accordion
