import React from 'react'
import { Box, Table, Th, Thead, Tr } from '@chakra-ui/react'
import SignleMovement from './SingleMovement'
import { useBalance } from '../../context/BalanceContext'

function TableMovements() {
  const { movements, deleteMovement, editMovement } = useBalance()

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
        {[...movements].reverse().map((movement) => (
          /* // DESKTOP-------------------------------- */

          <SignleMovement
            key={movement.id}
            movement={movement}
            deleteMovement={deleteMovement}
            editMovement={editMovement}
          />
        ))}
      </Table>
    </Box>
  )
}

export default TableMovements
