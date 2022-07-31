import {
  Modal,
  Button,
  FormControl,
  Input,
  ModalCloseButton,
  ModalContent,
  ModalBody,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  Select,
  HStack,
  Box,
  Image,
  Stack,
  Center,
  RadioGroup,
  Radio,
  Icon,
  useRadioGroup
} from '@chakra-ui/react'
import { useRef } from 'react'
import { useBalance } from '../../context/BalanceContext'

export function ModalMovement() {
  const { addMovement } = useBalance()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const descriptionRef = useRef()
  const amountRef = useRef()
  const categoryRef = useRef()
  const typeRef = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()
    addMovement({
      description: descriptionRef.current.value,
      amount: amountRef.current.valueAsNumber,
      category: categoryRef.current.value,
      type: typeRef.current.value
    })

    onClose()
  }

  return (
    <>
      <Button onClick={onOpen} bg={'black'} color={'white'} _hover={{ bg: 'blackAlpha.800' }}>
        +
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />

        <ModalContent>
          <form onSubmit={handleSubmit}>
            <ModalHeader textAlign={'center'}>Add Movement</ModalHeader>
            <Center>
              <Box boxSize="4rem">
                <Image src="https://cdn-icons-png.flaticon.com/512/7225/7225882.png" />
              </Box>
            </Center>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <Input
                  placeholder="Description"
                  ref={descriptionRef}
                  required
                  size="sm"
                  variant="flushed"
                  focusBorderColor="black"
                />
              </FormControl>
              <HStack mt={4}>
                <FormControl>
                  <Input
                    placeholder="Amount"
                    type="number"
                    ref={amountRef}
                    required
                    size="sm"
                    variant="flushed"
                    focusBorderColor="black"
                    step="any"
                  />
                </FormControl>

                <FormControl>
                  <Select ref={categoryRef} size="sm" variant="flushed" focusBorderColor="black">
                    <option value="Shops">Shops</option>
                    <option value="Services">Services</option>
                    <option value="Health and sport">Health and sport</option>
                    <option value="Entertainment">Entertainment</option>
                    <option value="Transportation">Transportation</option>
                    <option value="Restaurant and bars">Reastaurant and bars</option>
                    <option value="Other">Other</option>
                  </Select>
                </FormControl>
              </HStack>

              <FormControl mt={4}>
                <Select ref={typeRef} size="sm" variant="flushed" focusBorderColor="black">
                  <option value="expense">Expense</option>
                  <option value="income">Income</option>
                </Select>
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button
                bg="black"
                _hover={{ bg: 'blackAlpha.800' }}
                mr={3}
                type="submit"
                color={'white'}
              >
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
