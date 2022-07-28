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
  Icon,
  Center,
  Box,
  Image,
  HStack
} from '@chakra-ui/react'
import { useRef, useState } from 'react'

import { FiEdit2 } from 'react-icons/fi'
import { useBalance } from '../../context/BalanceContext'

export function ModalEdit({ movement }) {
  const { id } = movement

  const { isOpen, onOpen, onClose } = useDisclosure()
  const initialRef = useRef(null)
  const finalRef = useRef(null)
  const [description, setDescription] = useState(movement.description)
  const [amount, setAmount] = useState(movement.amount)
  const [category, setCategory] = useState(movement.category)
  const { editMovement } = useBalance()

  const handleSubmit = (e) => {
    e.preventDefault()
    editMovement({
      id,
      description,
      amount,
      category
    })
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
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <form onSubmit={handleSubmit}>
            <ModalHeader textAlign={'center'}>Edit movement</ModalHeader>
            <Center>
              <Box boxSize="4rem">
                <Image src="https://cdn-icons-png.flaticon.com/512/994/994429.png" />
              </Box>
            </Center>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl mt={6}>
                <Input
                  value={description}
                  required
                  onChange={(e) => setDescription(e.target.value)}
                  ref={initialRef}
                  size="sm"
                  variant="flushed"
                  placeholder="Description"
                  focusBorderColor="black"
                />
              </FormControl>
              <HStack mt={4}>
                <FormControl>
                  <Input
                    size="sm"
                    variant="flushed"
                    placeholder="Amount"
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    focusBorderColor="black"
                  />
                </FormControl>

                <FormControl>
                  <Select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    size="sm"
                    variant="flushed"
                    focusBorderColor="black"
                  >
                    <option value="shops">Shops</option>
                    <option value="services">Services</option>
                    <option value="health and sport">Health and sport</option>
                    <option value="entertainment">Entertainment</option>
                    <option value="transportation">Transportation</option>
                    <option value="restaurant and bars">Reastaurant and bars</option>
                    <option value="other">Other</option>
                  </Select>
                </FormControl>
              </HStack>
            </ModalBody>

            <ModalFooter>
              <Button
                bg="black"
                _hover={{ bg: 'blackAlpha.800' }}
                mr={3}
                type="submit"
                onClick={onClose}
                color={'white'}
              >
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
