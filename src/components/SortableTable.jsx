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
  const { config } = props

  const handleClick = (label) => {
    // console.log(label)
    // look at sort order andif (sortOrder === null)
    if (sortOrder === null) {
      setSortOrder('asc')
    } else if (sortOrder === 'asc') {
      setSortOrder('desc')
    } else if (sortOrder === 'desc') {
      setSortOrder(null)
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
          {column.label} IS SORTABLE
        </th>
      ),
    }
  })

  return <Table {...props} config={updatedConfig} />
}

export default SortableTable
