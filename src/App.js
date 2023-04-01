import React from 'react'
import Link from './components/Link'
import Route from './components/Route'
import AccordionPage from './pages/AccordionPage'
import DropdownPage from './pages/DropdownPage'

function App() {
  return (
    <div>
      <button>
        <Link to='/accordion'>Go to accordion</Link>
      </button>
      <button>
        <Link to='/dropdown'>Go to dropdown</Link>
      </button>
      <div>
        <Route path='/accordion'>
          <AccordionPage />
        </Route>
        <Route path='/dropdown'>
          <DropdownPage />
        </Route>
      </div>
    </div>
  )
}

export default App
