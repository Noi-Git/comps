import React, { useContext } from 'react'
import NavigationContext from '../context/navigation'

const Link = ({ to, children }) => {
  const { navigate } = useContext(NavigationContext)

  const handleClick = (event) => {
    // console.log(event) //look in the console -- ctrlKey and metaKey
    // check if user hold down command key on mac ot ctrl key on window -- open the new page
    if (event.metaKey || event.ctrlKey) {
      return
    }
    // if the above is not true -- preventDefault
    event.preventDefault()

    navigate(to)
  }

  return (
    <a href={to} onClick={handleClick}>
      {children}
    </a>
  )
}

export default Link
