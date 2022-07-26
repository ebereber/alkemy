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
  Select,
  Icon
} from '@chakra-ui/react'
import { useRef, useState } from 'react'

import { FiEdit2 } from 'react-icons/fi'

export function ModaEdit() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const initialRef = useRef(null)
  const finalRef = useRef(null)
  const [description, setDescription] = useState()
  const [amount, setAmount] = useState()
  const [category, setCategory] = useState()

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <>
      <Button onClick={onOpen} bg="gray.600" _hover={{ bg: 'gray.500' }}>
        <Icon as={FiEdit2} color={'white'} />
      </Button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <form onSubmit={handleSubmit}>
            <ModalHeader>Edit movement</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Description</FormLabel>
                <Input
                  value={description}
                  required
                  onChange={(e) => setDescription(e.target.value)}
                  ref={initialRef}
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Amount</FormLabel>
                <Input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Category</FormLabel>

                <Select value={category} onChange={(e) => setCategory(e.target.value)}>
                  <option value="shops">Shops</option>
                  <option value="services">Services</option>
                  <option value="health and sport">Health and sport</option>
                  <option value="entertainment">Entertainment</option>
                  <option value="transportation">Transportation</option>
                  <option value="restaurant and bars">Reastaurant and bars</option>
                  <option value="other">Other</option>
                </Select>
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} type="submit" onClick={onClose}>
                Edit
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  )
}
