import { useState, useEffect } from 'react'
import Button from '../components/Button'

const useCounter = (initialCount) => {
  const [count, setCount] = useState(initialCount)

  useEffect(() => {
    console.log(count)
  }, [count])

  const handleClick = () => {
    setCount(count + 1)
  }

  return {
    count,
    handleClick,
  }
}

const DemoCounterPage = ({ initialCount }) => {
  const { count, handleClick } = useCounter(initialCount)

  return (
    <div>
      <h1>Count is {count}</h1>
      <Button onClick={handleClick}>Increment</Button>
    </div>
  )
}

export default DemoCounterPage
