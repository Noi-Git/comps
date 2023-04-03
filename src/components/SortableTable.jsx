import { useState } from 'react'
import Table from './Table'

const SortableTable = (props) => {
  const [sortOrder, setSortOrder] = useState(null)
  const [sortBy, setSortBy] = useState(null)

  /* we are not modifying the props 
     - we only map over the config
     - if find the object that have SortValue 
       --- add header with sort function
  */
  const { config, data } = props

  const handleClick = (label) => {
    // console.log(label)
    // look at sort order andif (sortOrder === null)
    if (sortOrder === null) {
      setSortOrder('asc')
      setSortBy(label)
    } else if (sortOrder === 'asc') {
      setSortOrder('desc')
      setSortBy(label)
    } else if (sortOrder === 'desc') {
      setSortOrder(null)
      setSortBy(null)
    }
  }

  const updatedConfig = config.map((column) => {
    if (!column.sortValue) {
      return column
    }

    return {
      ...column,
      header: () => (
        <th onClick={() => handleClick(column.label)}>
          {getIcons(column.label, sortBy, sortOrder)}
          {column.label}
        </th>
      ),
    }
  })

  /* 
  - Only sort data if sortOrder && sortBy ar not null
  - Make a copy of the 'data' props
  - Find the correct sortValue function and use it for sorting
  */

  //Make a copy of the 'data' props
  let sortedData = data

  //Only sort data if sortOrder && sortBy ar not null
  if (sortOrder && sortBy) {
    // Find the correct sortValue function and use it for sorting
    // const column = config.find(column => column.label === sortBy)
    const { sortValue } = config.find((column) => column.label === sortBy) // destructed from column
    sortedData = [...data].sort((a, b) => {
      const valueA = sortValue(a)
      const valueB = sortValue(b)

      const reverseOrder = sortOrder === 'asc' ? 1 : -1

      if (typeof valueA === 'string') {
        return valueA.localeCompare(valueB) * reverseOrder
      } else {
        return (valueA - valueB) * reverseOrder
      }
    })
  }

  return (
    <div>
      {sortOrder} - {sortBy}
      <Table {...props} config={updatedConfig} data={sortedData} />
    </div>
  )
}

const getIcons = (label, sortBy, sortOrder) => {
  if (label !== sortBy) {
    return 'Show both icons'
  }

  if (sortOrder === null) {
    return 'both icons'
  } else if (sortOrder === 'asc') {
    return '-up-'
  } else if (sortOrder === 'desc') {
    return '-down-'
  }
}

export default SortableTable
