import { useState, useEffect } from 'react'
import Button from '../components/Button'
import Panel from '../components/Panel'

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
    <Panel className='m-3'>
      <h1 className='text-lg'>Count is {count}</h1>
      <div className='flex flex-row'>
        <Button className='mr-3' onClick={increment}>
          Increment
        </Button>
        <Button onClick={decrement}>Decrement</Button>
      </div>

      <form>
        <label>Add a lot!</label>
        <input
          className='p-1 m-3 bg-gray-50 border border-gray-300'
          type='number'
        />
        <Button>Add it</Button>
      </form>
    </Panel>
  )
}

export default DemoCounterPageReducer
