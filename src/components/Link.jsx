import useNavigation from '../hooks/use-navigation'
import classNames from 'classnames'

const Link = ({ to, children, className }) => {
  const { navigate } = useNavigation()

  const classes = classNames('text-blue-500', className)

  const handleClick = (event) => {
    if (event.metaKey || event.ctrlKey) {
      return
    }

    event.preventDefault()

    navigate(to)
  }

  return (
    <a className={classes} href={to} onClick={handleClick}>
      {children}
    </a>
  )
}

export default Link
