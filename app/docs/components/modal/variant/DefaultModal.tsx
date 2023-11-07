'use client'
import { useState } from 'react'
import { CloudArrowUp } from 'phosphor-react'
import { Button, Modal } from '~/src'

const DefaultModal = () => {
  const [showModal, setShowModal] = useState(false)
  const [showModalX, setShowModalX] = useState(false)

  const onClickOne = () => {
    setShowModal(!showModal)
  }
  const onClickTwo = () => {
    setShowModalX(!showModalX)
  }

  return (
    <div className="flex flex-wrap items-end gap-2 px-2 py-3">
      <Button onClick={onClickOne} type="primary">
        Modal
      </Button>
      <Button onClick={onClickTwo} type="primary">
        Modal With Cross
      </Button>
      <Modal icon={<CloudArrowUp size={28} color="#1B4DFF" />} size="md" show={showModal} position="center">
        <Modal.Header>Do you want to upload this file?</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-sm leading-relaxed text-slate-500 md:text-base">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button type="outlineGray" onClick={onClickOne}>
            Cancel
          </Button>
          <Button type="primary" onClick={onClickOne}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal icon={<CloudArrowUp size={28} color="#1B4DFF" />} size="md" show={showModalX} onClose={onClickTwo}>
        <Modal.Header>Do you want to upload this file?</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-sm leading-relaxed text-slate-500 md:text-base">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button type="outlineGray" onClick={onClickTwo}>
            Cancel
          </Button>
          <Button type="primary" onClick={onClickTwo}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

const DefaultModalCode = `
"use client";
import { useState } from "react";
import { Modal,Button } from "keep-react";
import { CloudArrowUp } from "phosphor-react";

export const ModalComponent = () => {
  const [showModal, setShowModal] = useState(false);
  const [showModalX, setShowModalX] = useState(false);

  const onClickOne = () => {
    setShowModal(!showModal);
  };
  const onClickTwo = () => {
    setShowModalX(!showModalX);
  };

  return (
    <>
      <Button onClick={onClickOne} type='primary' >Modal</Button>
      <Button onClick={onClickTwo} type='primary' >Modal With Cross</Button>
      <Modal
        icon={<CloudArrowUp size={28} color="#1B4DFF" />}
        size="md"
        show={showModal}
        position="center"
      >
        <Modal.Header>Do you want to upload this file?</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-sm md:text-base leading-relaxed text-slate-500">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button type="outlineGray" onClick={onClickOne}>
            Cancel
          </Button>
          <Button type="primary" onClick={onClickOne}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal
        icon={<CloudArrowUp size={28} color="#1B4DFF" />}
        size="md"
        show={showModalX}
        onClose={onClickTwo}
      >
        <Modal.Header>Do you want to upload this file?</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-sm md:text-base leading-relaxed text-slate-500">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button type="outlineGray" onClick={onClickTwo}>
            Cancel
          </Button>
          <Button type="primary" onClick={onClickTwo}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
`

export { DefaultModal, DefaultModalCode }
