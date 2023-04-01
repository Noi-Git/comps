import React, { createContext, useState } from 'react'

const NavigationContext = createContext()

const NavigationProvider = ({ children }) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)
  return (
    <NavigationContext.Provider value={{}}>
      {children}
    </NavigationContext.Provider>
  )
}

export { NavigationProvider }
export default NavigationContext
