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

  const actionBar = (
    <div>
      <Button primary onClick={handleClose}>
        I Accept
      </Button>
    </div>
  )
  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>Here is an important agreement for you to accept</p>
    </Modal>
  )

  return (
    <div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
        porttitor, nisl vel iaculis interdum, dui ante pretium purus, eget
        fringilla risus nisi cursus arcu. Aliquam metus massa, mattis blandit
        viverra sed,
      </p>
      <Button primary onClick={handleClick}>
        Open Modal
      </Button>
      {/* if the showModal is true - show the Modal. If showModal is false - show not thing */}
      {showModal && modal}
    </div>
  )
}

export default ModalPage
