import { useState, useEffect } from 'react'
import Button from '../components/Button'

const DemoCounterPageReducer = ({ initialCount }) => {
  const [count, setCount] = useState(initialCount)

  useEffect(() => {
    console.log(count)
  }, [count])

  const increment = () => {
    setCount(count + 1)
  }

  const decrement = () => {
    setCount(count - 1)
  }

  return (
    <div>
      <h1>Count is {count}</h1>
      <Button onClick={increment}>Increment</Button>
      <Button onClick={decrement}>Decrement</Button>
    </div>
  )
}

export default DemoCounterPageReducer
