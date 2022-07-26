import {
  Modal,
  Button,
  FormControl,
  FormLabel,
  Input,
  ModalCloseButton,
  ModalContent,
  ModalBody,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  Select
} from '@chakra-ui/react'
import { useRef } from 'react'

export function ModalMovement() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const descriptionRef = useRef()
  const amountRef = useRef()
  const categoryRef = useRef()
  const typeRef = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()
    onClose()
  }

  return (
    <>
      <Button onClick={onOpen} bg={'black'} color={'white'}>
        +
      </Button>

      <Modal
        /* initialFocusRef={initialRef}
          finalFocusRef={finalRef} */
        isOpen={isOpen}
        onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <form onSubmit={handleSubmit}>
            <ModalHeader>Add Movement</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Description</FormLabel>
                <Input ref={descriptionRef} required />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Amount</FormLabel>
                <Input type="number" ref={amountRef} required />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Category</FormLabel>
                <Select ref={categoryRef}>
                  <option value="Shops">Shops</option>
                  <option value="Services">Services</option>
                  <option value="Health and sport">Health and sport</option>
                  <option value="Entertainment">Entertainment</option>
                  <option value="Transportation">Transportation</option>
                  <option value="Restaurant and bars">Reastaurant and bars</option>
                  <option value="Other">Other</option>
                </Select>
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Type</FormLabel>
                <Select ref={typeRef}>
                  <option value="expense">Expense</option>
                  <option value="income">Income</option>
                </Select>
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} type="submit">
                Add
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  )
}
