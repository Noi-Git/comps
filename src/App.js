import React from 'react'
import Route from './components/Route'
import AccordionPage from './pages/AccordionPage'
import DropdownPage from './pages/DropdownPage'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <div>
      <Sidebar />
      <div>
        <Route path='/accordion'>
          <AccordionPage />
        </Route>
        <Route path='/'>
          <DropdownPage />
        </Route>
      </div>
    </div>
  )
}

export default App
