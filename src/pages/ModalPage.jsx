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
        viverra sed, pellentesque vitae nisl. In a felis sed ipsum commodo
        facilisis eget ac velit. Etiam fringilla eros est, et tincidunt tortor
        egestas mattis. Nunc euismod iaculis sodales. Maecenas sodales non
        ligula eu dapibus. Nullam egestas placerat diam vitae commodo. Duis
        tincidunt et tortor a gravida. Integer varius consequat lorem, auctor
        facilisis enim venenatis eget. Fusce dignissim tempor diam, vitae
        ultricies purus vehicula sit amet. Nulla euismod arcu quis neque porta,
        aliquet feugiat magna ultrices. Nulla bibendum, ipsum at sodales
        tincidunt, libero nibh ultrices erat, vel rhoncus nisl nisl sed ligula.
        Aenean vestibulum posuere eros. Praesent purus nisi, scelerisque sed
        lacus at, finibus aliquam turpis.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
        porttitor, nisl vel iaculis interdum, dui ante pretium purus, eget
        fringilla risus nisi cursus arcu. Aliquam metus massa, mattis blandit
        viverra sed, pellentesque vitae nisl. In a felis sed ipsum commodo
        facilisis eget ac velit. Etiam fringilla eros est, et tincidunt tortor
        egestas mattis. Nunc euismod iaculis sodales. Maecenas sodales non
        ligula eu dapibus. Nullam egestas placerat diam vitae commodo. Duis
        tincidunt et tortor a gravida. Integer varius consequat lorem, auctor
        facilisis enim venenatis eget. Fusce dignissim tempor diam, vitae
        ultricies purus vehicula sit amet. Nulla euismod arcu quis neque porta,
        aliquet feugiat magna ultrices. Nulla bibendum, ipsum at sodales
        tincidunt, libero nibh ultrices erat, vel rhoncus nisl nisl sed ligula.
        Aenean vestibulum posuere eros. Praesent purus nisi, scelerisque sed
        lacus at, finibus aliquam turpis.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
        porttitor, nisl vel iaculis interdum, dui ante pretium purus, eget
        fringilla risus nisi cursus arcu. Aliquam metus massa, mattis blandit
        viverra sed, pellentesque vitae nisl. In a felis sed ipsum commodo
        facilisis eget ac velit. Etiam fringilla eros est, et tincidunt tortor
        egestas mattis. Nunc euismod iaculis sodales. Maecenas sodales non
        ligula eu dapibus. Nullam egestas placerat diam vitae commodo. Duis
        tincidunt et tortor a gravida. Integer varius consequat lorem, auctor
        facilisis enim venenatis eget. Fusce dignissim tempor diam, vitae
        ultricies purus vehicula sit amet. Nulla euismod arcu quis neque porta,
        aliquet feugiat magna ultrices. Nulla bibendum, ipsum at sodales
        tincidunt, libero nibh ultrices erat, vel rhoncus nisl nisl sed ligula.
        Aenean vestibulum posuere eros. Praesent purus nisi, scelerisque sed
        lacus at, finibus aliquam turpis.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
        porttitor, nisl vel iaculis interdum, dui ante pretium purus, eget
        fringilla risus nisi cursus arcu. Aliquam metus massa, mattis blandit
        viverra sed, pellentesque vitae nisl. In a felis sed ipsum commodo
        facilisis eget ac velit. Etiam fringilla eros est, et tincidunt tortor
        egestas mattis. Nunc euismod iaculis sodales. Maecenas sodales non
        ligula eu dapibus. Nullam egestas placerat diam vitae commodo. Duis
        tincidunt et tortor a gravida. Integer varius consequat lorem, auctor
        facilisis enim venenatis eget. Fusce dignissim tempor diam, vitae
        ultricies purus vehicula sit amet. Nulla euismod arcu quis neque porta,
        aliquet feugiat magna ultrices. Nulla bibendum, ipsum at sodales
        tincidunt, libero nibh ultrices erat, vel rhoncus nisl nisl sed ligula.
        Aenean vestibulum posuere eros. Praesent purus nisi, scelerisque sed
        lacus at, finibus aliquam turpis.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
        porttitor, nisl vel iaculis interdum, dui ante pretium purus, eget
        fringilla risus nisi cursus arcu. Aliquam metus massa, mattis blandit
        viverra sed, pellentesque vitae nisl. In a felis sed ipsum commodo
        facilisis eget ac velit. Etiam fringilla eros est, et tincidunt tortor
        egestas mattis. Nunc euismod iaculis sodales. Maecenas sodales non
        ligula eu dapibus. Nullam egestas placerat diam vitae commodo. Duis
        tincidunt et tortor a gravida. Integer varius consequat lorem, auctor
        facilisis enim venenatis eget. Fusce dignissim tempor diam, vitae
        ultricies purus vehicula sit amet. Nulla euismod arcu quis neque porta,
        aliquet feugiat magna ultrices. Nulla bibendum, ipsum at sodales
        tincidunt, libero nibh ultrices erat, vel rhoncus nisl nisl sed ligula.
        Aenean vestibulum posuere eros. Praesent purus nisi, scelerisque sed
        lacus at, finibus aliquam turpis.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
        porttitor, nisl vel iaculis interdum, dui ante pretium purus, eget
        fringilla risus nisi cursus arcu. Aliquam metus massa, mattis blandit
        viverra sed, pellentesque vitae nisl. In a felis sed ipsum commodo
        facilisis eget ac velit. Etiam fringilla eros est, et tincidunt tortor
        egestas mattis. Nunc euismod iaculis sodales. Maecenas sodales non
        ligula eu dapibus. Nullam egestas placerat diam vitae commodo. Duis
        tincidunt et tortor a gravida. Integer varius consequat lorem, auctor
        facilisis enim venenatis eget. Fusce dignissim tempor diam, vitae
        ultricies purus vehicula sit amet. Nulla euismod arcu quis neque porta,
        aliquet feugiat magna ultrices. Nulla bibendum, ipsum at sodales
        tincidunt, libero nibh ultrices erat, vel rhoncus nisl nisl sed ligula.
        Aenean vestibulum posuere eros. Praesent purus nisi, scelerisque sed
        lacus at, finibus aliquam turpis.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
        porttitor, nisl vel iaculis interdum, dui ante pretium purus, eget
        fringilla risus nisi cursus arcu. Aliquam metus massa, mattis blandit
        viverra sed, pellentesque vitae nisl. In a felis sed ipsum commodo
        facilisis eget ac velit. Etiam fringilla eros est, et tincidunt tortor
        egestas mattis. Nunc euismod iaculis sodales. Maecenas sodales non
        ligula eu dapibus. Nullam egestas placerat diam vitae commodo. Duis
        tincidunt et tortor a gravida. Integer varius consequat lorem, auctor
        facilisis enim venenatis eget. Fusce dignissim tempor diam, vitae
        ultricies purus vehicula sit amet. Nulla euismod arcu quis neque porta,
        aliquet feugiat magna ultrices. Nulla bibendum, ipsum at sodales
        tincidunt, libero nibh ultrices erat, vel rhoncus nisl nisl sed ligula.
        Aenean vestibulum posuere eros. Praesent purus nisi, scelerisque sed
        lacus at, finibus aliquam turpis.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
        porttitor, nisl vel iaculis interdum, dui ante pretium purus, eget
        fringilla risus nisi cursus arcu. Aliquam metus massa, mattis blandit
        viverra sed, pellentesque vitae nisl. In a felis sed ipsum commodo
        facilisis eget ac velit. Etiam fringilla eros est, et tincidunt tortor
        egestas mattis. Nunc euismod iaculis sodales. Maecenas sodales non
        ligula eu dapibus. Nullam egestas placerat diam vitae commodo. Duis
        tincidunt et tortor a gravida. Integer varius consequat lorem, auctor
        facilisis enim venenatis eget. Fusce dignissim tempor diam, vitae
        ultricies purus vehicula sit amet. Nulla euismod arcu quis neque porta,
        aliquet feugiat magna ultrices. Nulla bibendum, ipsum at sodales
        tincidunt, libero nibh ultrices erat, vel rhoncus nisl nisl sed ligula.
        Aenean vestibulum posuere eros. Praesent purus nisi, scelerisque sed
        lacus at, finibus aliquam turpis.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
        porttitor, nisl vel iaculis interdum, dui ante pretium purus, eget
        fringilla risus nisi cursus arcu. Aliquam metus massa, mattis blandit
        viverra sed, pellentesque vitae nisl. In a felis sed ipsum commodo
        facilisis eget ac velit. Etiam fringilla eros est, et tincidunt tortor
        egestas mattis. Nunc euismod iaculis sodales. Maecenas sodales non
        ligula eu dapibus. Nullam egestas placerat diam vitae commodo. Duis
        tincidunt et tortor a gravida. Integer varius consequat lorem, auctor
        facilisis enim venenatis eget. Fusce dignissim tempor diam, vitae
        ultricies purus vehicula sit amet. Nulla euismod arcu quis neque porta,
        aliquet feugiat magna ultrices. Nulla bibendum, ipsum at sodales
        tincidunt, libero nibh ultrices erat, vel rhoncus nisl nisl sed ligula.
        Aenean vestibulum posuere eros. Praesent purus nisi, scelerisque sed
        lacus at, finibus aliquam turpis.
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
