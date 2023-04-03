import Table from './Table'

const SortableTable = (props) => {
  /* we are not modifying the props 
     - we only map over the config
     - if find the object that have SortValue 
       --- add header with sort function
  */
  const { config } = props

  const updatedConfig = config.map((column) => {
    if (!column.sortValue) {
      return column
    }

    return {
      ...column,
      header: () => <th>{column.label} IS SORTABLE</th>,
    }
  })

  return <Table {...props} config={updatedConfig} />
}

export default SortableTable
