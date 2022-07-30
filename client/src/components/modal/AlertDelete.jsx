import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Box,
  Button,
  Center,
  Icon,
  Image,
  useDisclosure
} from '@chakra-ui/react'
import { useRef } from 'react'
import { MdDeleteOutline } from 'react-icons/md'

export function AlertDelete({ movement, deleteMovement }) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = useRef()

  const onDelete = (id) => {
    deleteMovement(id)
    onClose()
  }

  return (
    <>
      <Button bg="gray.600" mr={'1rem'} _hover={{ bg: 'gray.500' }} onClick={onOpen}>
        <Icon color={'white'} as={MdDeleteOutline} />
      </Button>

      <AlertDialog isOpen={isOpen} leastDestructiveRef={cancelRef} onClose={onClose}>
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold" textAlign={'center'}>
              Delete Movement
            </AlertDialogHeader>
            <Center pb={6}>
              <Box boxSize="4rem">
                <Image src="https://cdn-icons-png.flaticon.com/512/7657/7657558.png" />
              </Box>
            </Center>

            <AlertDialogBody>Are you sure? You can't undo this action afterwards.</AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button
                bg="black"
                _hover={{ bg: 'blackAlpha.800' }}
                color="white"
                onClick={() => onDelete(movement.id)}
                ml={3}
              >
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  )
}
