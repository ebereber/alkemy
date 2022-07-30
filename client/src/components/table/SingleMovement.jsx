import { Badge, Button, HStack, Icon, Tbody, Td, Text, Tr, VStack } from '@chakra-ui/react'

import { MdDeleteOutline } from 'react-icons/md'
import React from 'react'
import { ModalEdit } from '../modal/ModalEdit'
import { getColor } from '../../utils/getColor'
import { AlertDelete } from '../modal/AlertDelete'
import { currencyFormater } from '../../utils/currencyFormatter'

function SignleMovement({ deleteMovement, movement }) {
  const { id, description, date, amount, category, type } = movement

  return (
    <>
      {/*  MD */}
      <Tbody
        _hover={{ bg: 'gray.800', color: 'white' }}
        display={{ base: 'none', sm: 'none', md: 'table-header-group' }}
      >
        <Tr>
          <Td>{date}</Td>
          <Td>
            <Badge colorScheme={getColor(category)}>{category}</Badge>
          </Td>
          <Td textTransform={'capitalize'} fontWeight={'semibold'}>
            {description}
          </Td>
          <Td fontWeight={'medium'} color={type !== 'expense' ? 'green' : 'red'}>
            {currencyFormater.format(amount)}
          </Td>
          <Td>
            <HStack>
              <AlertDelete movement={movement} deleteMovement={deleteMovement} />
              <ModalEdit movement={movement} />
            </HStack>
          </Td>
        </Tr>
      </Tbody>

      <Tbody
        _hover={{ bg: 'gray.800', color: 'white' }}
        display={{ base: 'table-header-group', md: 'none' }}
      >
        <Tr>
          <Td>
            <HStack>
              <VStack alignItems={'baseline'}>
                <Text textTransform={'capitalize'} fontWeight={'medium'}>
                  {description}
                </Text>
                <Text fontWeight={'medium'} color={type !== 'expense' ? 'green' : 'red'}>
                  ${amount}
                </Text>
                <Badge colorScheme={getColor(category)}>{category}</Badge>
                <Text>{date}</Text>
              </VStack>
            </HStack>
          </Td>

          <Td p="0">
            <AlertDelete movement={movement} deleteMovement={deleteMovement} />
            <ModalEdit movement={movement} mb={{ base: '1rem' }} />
          </Td>
        </Tr>
      </Tbody>
    </>
  )
}

export default SignleMovement
