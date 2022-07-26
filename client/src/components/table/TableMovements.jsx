import React from 'react'
import { Box, Table, Th, Thead, Tr } from '@chakra-ui/react'
import SignleMovement from './SingleMovement'

function TableMovements() {
  return (
    <Box w="full" p={50}>
      <Table size="sm">
        <Thead>
          <Tr display={{ base: 'none', md: 'contents' }}>
            <Th>Date</Th>
            <Th>Category</Th>
            <Th>Concep</Th>
            <Th>Amount</Th>
            <Th>Action</Th>
          </Tr>
          <Tr display={{ base: 'block', md: 'none' }}>
            <Th>Movements</Th>
          </Tr>
        </Thead>
        <SignleMovement />
      </Table>
    </Box>
  )
}

export default TableMovements
