import React from 'react'
import { Center, VStack, Stack } from '@chakra-ui/react'
import TableMovements from '../components/table/TableMovements'
import { ModalMovement } from '../components/modal/ModalMovement'
import { useBalance } from '../context/BalanceContext'

import { useAuth } from '../context/AuthContext'
import NavMenu from '../components/nav/NavMenu'
import UserAvatar from '../components/avatar/UserAvatar'
import HomeContent from '../components/home/HomeContent'

function Home() {
  const { movements } = useBalance()
  const { user } = useAuth()

  if (user) {
    return (
      <Stack minH={'100vh'}>
        <NavMenu />
        <Center>
          <VStack w={'100%'}>
            <UserAvatar />
            <HomeContent />
            <ModalMovement />
            {movements.length !== 0 && <TableMovements />}
          </VStack>
        </Center>
      </Stack>
    )
  }
}

export default Home
