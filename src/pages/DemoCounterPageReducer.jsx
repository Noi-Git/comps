import { useReducer, useEffect } from 'react'
import Button from '../components/Button'
import Panel from '../components/Panel'

const INCREMENT_COUNT = 'increment'
const SET_VALUE_TO_ADD = 'set-value-to-add'

const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT_COUNT:
      return { ...state, count: state.count + 1 }

    case SET_VALUE_TO_ADD:
      return { ...state, valueToAdd: action.payload }

    default:
      return state
  }
}

const DemoCounterPageReducer = ({ initialCount }) => {
  const [state, dispatch] = useReducer(reducer, {
    count: initialCount,
    valueToAdd: 0,
  })
  console.log(state)

  useEffect(() => {
    console.log(state.count)
  }, [state.count])

  const increment = () => {
    dispatch({
      type: INCREMENT_COUNT, // the string here can be anything that make sense
    })
  }

  const decrement = () => {
    // setCount(count - 1)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  const handleChange = (event) => {
    const value = parseInt(event.target.value) || 0

    // setValueToAdd(value)
    dispatch({
      type: SET_VALUE_TO_ADD,
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
