import { useReducer, useEffect } from 'react'
import Button from '../components/Button'
import Panel from '../components/Panel'

const reducer = (state, adction) => {}

const DemoCounterPageReducer = ({ initialCount }) => {
  // const [count, setCount] = useState(initialCount)
  // const [valueToAdd, setValueToAdd] = useState(0)

  const [state, dispatch] = useReducer(reducer, {
    count: initialCount,
    valueToAdd: 0,
  })

  useEffect(() => {
    console.log(state.count)
  }, [state.count])

  const increment = () => {
    // setCount(count + 1)
  }

  const decrement = () => {
    // setCount(count - 1)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    // setCount(count + valueToAdd)
    // setValueToAdd(0)
  }

  const handleChange = (event) => {
    const value = parseInt(event.target.value) || 0

    // setValueToAdd(value)
  }

  return (
    <Panel className='m-3'>
      <h1 className='text-lg'>Count is {state.count}</h1>
      <div className='flex flex-row'>
        <Button className='mr-3' onClick={increment}>
          Increment
        </Button>
        <Button onClick={decrement}>Decrement</Button>
      </div>

      <form onSubmit={handleSubmit}>
        <label>Add a lot!</label>
        <input
          className='p-1 m-3 bg-gray-50 border border-gray-300'
          value={state.valueToAdd || ''}
          onChange={handleChange}
          type='number'
        />
        <Button>Add it</Button>
      </form>
    </Panel>
  )
}

export default DemoCounterPageReducer
