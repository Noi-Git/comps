import React from 'react'

const Table = ({ data }) => {
  const renderedRows = data.map((fruit) => {
    return (
      <tr>
        <td>{fruit.name}</td>
        <td>{fruit.color}</td>
        <td>{fruit.score}</td>
      </tr>
    )
  })

  return (
    <table>
      <thead>
        <tr>
          <th>Fruit</th>
          <th>Color</th>
          <th>Score</th>
        </tr>
      </thead>
      <tbody>{renderedRows}</tbody>
    </table>
  )
}

export default Table
