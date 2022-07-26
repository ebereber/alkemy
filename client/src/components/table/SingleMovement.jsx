import { Badge, Button, Icon, Tbody, Td, Tr } from '@chakra-ui/react'

import { MdDeleteOutline } from 'react-icons/md'
import React from 'react'
import { ModaEdit } from './modal/ModalEdit'

function SignleMovement() {
  return (
    <Tbody
      _hover={{ bg: 'gray.800', color: 'white' }}
      display={{ base: 'none', md: 'table-header-group' }}>
      <Tr>
        <Td>date</Td>
        <Td>
          <Badge colorScheme="purple">category</Badge>
        </Td>
        <Td>description</Td>
        <Td>$amount</Td>
        <Td>
          <Button
            bg="gray.600"
            mr={'1rem'}
            mb={{ base: '1rem', md: '0' }}
            _hover={{ bg: 'gray.500' }}>
            <Icon color={'white'} as={MdDeleteOutline} />
          </Button>
          <ModaEdit />
        </Td>
      </Tr>
    </Tbody>
  )
}

export default SignleMovement
