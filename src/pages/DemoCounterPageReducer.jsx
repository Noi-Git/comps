import { useReducer, useEffect } from 'react'
import Button from '../components/Button'
import Panel from '../components/Panel'

const reducer = (state, action) => {
  if (action.type === 'increment') {
    return {
      ...state,
      count: state.count + 1,
    }
  }

  if (action.type === 'change-value-to-add') {
    return {
      ...state,
      valueToAdd: action.payload,
    }
  }

  return state // alway return state --- even if you didn't want to update anything
}

const DemoCounterPageReducer = ({ initialCount }) => {
  // const [count, setCount] = useState(initialCount)
  // const [valueToAdd, setValueToAdd] = useState(0)

  const [state, dispatch] = useReducer(reducer, {
    count: initialCount,
    valueToAdd: 0,
  })
  // console.log(state)

  useEffect(() => {
    console.log(state.count)
  }, [state.count])

  const increment = () => {
    // setCount(count + 1)
    dispatch({
      type: 'increment', // the string here can be anything that make sense
    })
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
    dispatch({
      type: 'change-value-to-add',
      payload: value, // tell reducer what we want to set the value to
    })
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
