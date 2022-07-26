import { Badge, Button, Icon, Tbody, Td, Tr } from '@chakra-ui/react'

import { MdDeleteOutline } from 'react-icons/md'
import React from 'react'
import { ModalEdit } from '../modal/ModalEdit'

function SignleMovement({ deleteMovement, movement }) {
  const { id, description, date, amount, category, type } = movement
  return (
    <Tbody
      _hover={{ bg: 'gray.800', color: 'white' }}
      display={{ base: 'none', md: 'table-header-group' }}>
      <Tr>
        <Td>{date}</Td>
        <Td>
          <Badge colorScheme="purple">{category}</Badge>
        </Td>
        <Td>{description}</Td>
        <Td color={type !== 'expense' ? 'green' : 'red'}>${amount}</Td>
        <Td>
          <Button
            bg="gray.600"
            mr={'1rem'}
            mb={{ base: '1rem', md: '0' }}
            _hover={{ bg: 'gray.500' }}
            onClick={() => deleteMovement(id)}>
            <Icon color={'white'} as={MdDeleteOutline} />
          </Button>
          <ModalEdit movement={movement} />
        </Td>
      </Tr>
    </Tbody>
  )
}

export default SignleMovement
