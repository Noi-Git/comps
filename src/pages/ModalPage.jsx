import { useState } from 'react'
import Modal from '../components/Modal'
import Button from '../components/Button'

const ModalPage = () => {
  const [showModal, setShowModal] = useState(false)

  const handleClick = () => {
    setShowModal(true)
  }

  return (
    <div>
      <Button primary onClick={handleClick}>
        Open Modal
      </Button>
      {/* if the showModal is true - show the Modal. If showModal is false - show not thing */}
      {showModal && <Modal />}
    </div>
  )
}

export default ModalPage
