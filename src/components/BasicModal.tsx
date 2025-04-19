import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from '@heroui/modal'
import { Button } from '@heroui/button'
import { Form, Formik } from 'formik'
import { MemeType } from '@/interfaces/meme.interace.ts'
import React from 'react'

export type ModalProps = {
  isOpen: boolean
  onClose: () => void
  onSave: (values: MemeType) => void
  initialValues: MemeType
  children?: React.ReactNode
}

export const BasicModal = ({ isOpen, onClose, onSave, initialValues, children }: ModalProps) => {
  return (
    <Modal isOpen={isOpen} placement="top-center" onClose={onClose}>
      <ModalContent>
        <Formik initialValues={initialValues} onSubmit={onSave} enableReinitialize>
          <Form>
            <ModalHeader className="flex flex-col gap-1">Edit Meme</ModalHeader>
            <ModalBody>
              <div className="flex flex-col gap-4">{children}</div>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="flat" onPress={onClose}>
                Close
              </Button>
              <Button type="submit" color="primary">
                Save
              </Button>
            </ModalFooter>
          </Form>
        </Formik>
      </ModalContent>
    </Modal>
  )
}
