import { useState } from 'react'
import Modal from '../components/Modal'
import Button from '../components/Button'

const ModalPage = () => {
  const [showModal, setShowModal] = useState(false)

  const handleClick = () => {
    setShowModal(true)
  }

  const handleClose = () => {
    setShowModal(false)
  }

  const modal = <Modal onClose={handleClose} />

  return (
    <div>
      <Button primary onClick={handleClick}>
        Open Modal
      </Button>
      {/* if the showModal is true - show the Modal. If showModal is false - show not thing */}
      {showModal && modal}
    </div>
  )
}

export default ModalPage
